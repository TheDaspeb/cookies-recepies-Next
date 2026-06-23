import Image from "next/image";
import Link from "next/link";
import { LoginForm } from "../components/LoginForm"; 

type LoginPageProps = {
  searchParams: Promise<{ redirectTo?: string }>;
};

function getSafeRedirectPath(redirectTo?: string) {
  if (!redirectTo || !redirectTo.startsWith("/") || redirectTo.startsWith("//")) {
    return "/";
  }

  return redirectTo;
}

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const { redirectTo } = await searchParams;
  const safeRedirectTo = getSafeRedirectPath(redirectTo);

  return (
    <main className="grid min-h-screen grid-cols-1 bg-[#fffaf4] md:grid-cols-2">
      <section className="flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <Link
            href="/"
            className="mb-12 block text-center text-2xl font-bold text-[#6f4e37]"
          >
             Cooking Now
          </Link>

          <div className="mb-10 text-center">
            <h1 className="text-5xl font-bold text-[#3b2518]">
              Bienvenido de nuevo
            </h1>

            <p className="mt-4 text-lg text-gray-500">
              Inicia sesión para continuar disfrutando de tus recetas favoritas.
            </p>
          </div>

          <LoginForm redirectTo={safeRedirectTo} />
        </div>
      </section>

      <section className="relative hidden min-h-screen md:block">
        <Image
          src="/images/login-dinner.webp"
          alt="Cena deliciosa"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/20" />
      </section>
    </main>
  );
}
