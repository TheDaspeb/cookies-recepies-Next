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
        className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
        aria-label="Navegacion principal"
      >
        <Link
          href="/"
          className="text-2xl font-bold tracking-normal text-[#6f4e37]"
        >
          Cooking Now
        </Link>

        <div className="flex flex-wrap items-center gap-2">
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
      </nav>
    </header>
  );
}
