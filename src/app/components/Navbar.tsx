import { cookies } from "next/headers";
import Link from "next/link";
import { verifyToken } from "../lib/jwt";
import { LogoutButton } from "./LogoutButton";

const publicNavigationItems = [
  { href: "/", label: "Inicio" },
  { href: "/register", label: "Registro" },
  { href: "/login", label: "Login" },
];

export async function Navbar() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  const session = token ? verifyToken(token) : null;

  return (
    <header className="sticky top-0 z-50 border-b border-[#e8d8c7] bg-[#fffaf4]/95 shadow-sm backdrop-blur">
      <nav
        className="mx-auto flex min-h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:min-h-[73px] lg:px-8"
        aria-label="Navegación principal"
      >
        <Link
          href="/"
          className="shrink-0 text-xl font-bold tracking-tight text-[#6f4e37] sm:text-2xl"
        >
          Cooking Now
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          {session ? (
            <>
              <Link
                href="/"
                className="rounded-md border border-[#d6b89a] bg-white px-4 py-2 text-sm font-semibold text-[#6f4e37] shadow-sm transition hover:border-[#b98c67] hover:bg-[#f3e2d0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9a6a45]"
              >
                Inicio
              </Link>
              <span className="rounded-md border border-[#ead8c4] bg-[#fffdf9] px-4 py-2 text-sm font-semibold text-[#6f4e37]">
                {session.name}
              </span>
              <LogoutButton />
            </>
          ) : (
            publicNavigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md border border-[#d6b89a] bg-white px-4 py-2 text-sm font-semibold text-[#6f4e37] shadow-sm transition hover:border-[#b98c67] hover:bg-[#f3e2d0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9a6a45]"
              >
                {item.label}
              </Link>
            ))
          )}
        </div>

        <details className="group relative md:hidden">
          <summary className="flex min-h-11 cursor-pointer list-none items-center gap-2 rounded-lg border border-[#d6b89a] bg-white px-3 text-sm font-semibold text-[#6f4e37] shadow-sm marker:content-none">
            Menú
            <span aria-hidden="true" className="text-lg leading-none transition group-open:rotate-45">
              +
            </span>
          </summary>

          <div className="absolute right-0 top-[calc(100%+0.65rem)] z-50 grid min-w-[min(18rem,calc(100vw-2rem))] gap-2 rounded-xl border border-[#e6d2bd] bg-[#fffaf4] p-3 shadow-xl">
            {session ? (
              <>
                <p className="truncate px-2 py-1 text-sm font-semibold text-[#6f4e37]">
                  Hola, {session.name}
                </p>
                <Link
                  href="/"
                  className="rounded-lg border border-[#d6b89a] bg-white px-4 py-3 text-sm font-semibold text-[#6f4e37]"
                >
                  Inicio
                </Link>
                <LogoutButton />
              </>
            ) : (
              publicNavigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg border border-[#d6b89a] bg-white px-4 py-3 text-sm font-semibold text-[#6f4e37]"
                >
                  {item.label}
                </Link>
              ))
            )}
          </div>
        </details>
      </nav>
    </header>
  );
}
