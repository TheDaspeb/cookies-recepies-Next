import { NextResponse } from "next/server";
import { cookies } from "next/headers"; 
import { authService } from "@/src/app/services/auth.service";
import { emailService } from "@/src/app/services/email.service";
import { generateToken } from "@/src/app/lib/jwt";

export async function POST(request:Request) {
    try {
        const {name, email, password} = await request.json();

        if (!name || !email || !password) {
            return NextResponse.json(
                {message: "Todos los campos son obligatorios."},
                {status: 400}
            );
        }

        const user = await authService.rigister({
            name, 
            email, 
            password,
        });

        const token = generateToken({
            userId: user.id,
            name: user.name,
            email: user.email,
        });

        const cookieStore = await cookies();

        cookieStore.set("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
            maxAge: 60 * 60 * 24 * 7,
        });

        let welcomeEmailSent = false;

        try {
            const welcomeEmail = await emailService.sendWelcomeEmail({
                name: user.name,
                email: user.email,
            });

            welcomeEmailSent = welcomeEmail.sent;
        } catch (emailError) {
            console.error("Error al enviar correo de bienvenida", emailError);
        }

        return NextResponse.json(
            {
                message: "Usuario registrado correctamente", 
                welcomeEmailSent,
                user: {
                    id: user.id,
                    name: user.name,
                    email: user.email
                },
            },
            { status: 201 }
        );
    } catch(error) {
        const message = error instanceof Error ? error.message: "Error al registrar ususario";

        return NextResponse.json({ message }, { status: 400 });
    }
}
