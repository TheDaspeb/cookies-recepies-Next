import { prisma } from "../lib/prisma";
import { hashPassword } from "../lib/password";
import bcrypt from "bcryptjs";

type RegisterData = {
    name: string,
    email: string,
    password: string,
};

type LoginData = {
    email:string,
    password:string,
}

export const authService = {
    async rigister(data: RegisterData) {
        const userExist = await prisma.user.findUnique({
            where: { email: data.email }
        });

        if (userExist) {
            throw Error("El usuario ya existe");
        }

        const hashedPassword = await hashPassword(data.password);

        const user = await prisma.user.create({
            data: {
                name: data.name,
                email: data.email,
                password: hashedPassword
            }
        });

        return user;
    },

    async login(data: LoginData) {
        const user = await prisma.user.findUnique({
            where: {
                email: data.email,
            },
        });

        if (!user) {
            throw new Error("Correo o contraseña incorrectos");
        }

        const passwordMatch = await bcrypt.compare(
            data.password,
            user.password
        );

        if (!passwordMatch) {
            throw new Error("Correo o contraseña incorrectos");
        }

        return user;
    },
};