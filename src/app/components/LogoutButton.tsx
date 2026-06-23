"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function LogoutButton() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  async function handleLogout() {
    setIsLoading(true);

    await fetch("/api/auth/logout", {
      method: "POST",
    });

    router.push("/");
    router.refresh();
  }

  return (
    <button
      type="button"
      onClick={handleLogout}
      disabled={isLoading}
      className="rounded-md border border-[#d6b89a] bg-white px-4 py-2 text-sm font-semibold text-[#6f4e37] shadow-sm transition hover:border-[#b98c67] hover:bg-[#f3e2d0] disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9a6a45]"
    >
      {isLoading ? "Saliendo..." : "Logout"}
    </button>
  );
}
