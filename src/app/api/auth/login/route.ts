import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { authService } from "@/src/app/services/auth.service";
import { generateToken } from "@/src/app/lib/jwt";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        {
          message: "Todos los campos son obligatorios",
        },
        {
          status: 400,
        }
      );
    }

    const user = await authService.login({
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

    return NextResponse.json(
      {
        message: "Inicio de sesión exitoso",
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
        },
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Error al iniciar sesión";

    return NextResponse.json(
      {
        message,
      },
      {
        status: 401,
      }
    );
  }
}