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
    <main className="grid min-h-[calc(100svh-4rem)] grid-cols-1 bg-[#fffaf4] md:grid-cols-2 lg:min-h-[calc(100svh-73px)]">
      <section className="flex items-center justify-center px-4 py-10 sm:px-8 sm:py-12 lg:px-12">
        <div className="w-full max-w-md">
          <Link
            href="/"
            className="mb-8 block text-center text-xl font-bold text-[#6f4e37] sm:mb-12 sm:text-2xl"
          >
             Cooking Now
          </Link>

          <div className="mb-10 text-center">
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-[#3b2518] sm:text-4xl lg:text-5xl">
              Bienvenido de nuevo
            </h1>

            <p className="mt-4 text-base leading-7 text-gray-500 sm:text-lg">
              Inicia sesión para continuar disfrutando de tus recetas favoritas.
            </p>
          </div>

          <LoginForm redirectTo={safeRedirectTo} />
        </div>
      </section>

      <section className="relative hidden min-h-[calc(100svh-4rem)] md:block lg:min-h-[calc(100svh-73px)]">
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
