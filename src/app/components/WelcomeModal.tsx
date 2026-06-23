"use client";

import { useEffect, useState } from "react";

const WELCOME_STORAGE_KEY = "cookingNowWelcomeName";

export { WELCOME_STORAGE_KEY };

export function WelcomeModal() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const storedName = window.sessionStorage.getItem(WELCOME_STORAGE_KEY);

    if (!storedName) {
      return;
    }

    window.sessionStorage.removeItem(WELCOME_STORAGE_KEY);

    queueMicrotask(() => {
      setUserName(storedName);
    });
  }, []);

  if (!userName) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#2d1a10]/50 px-4">
      <section
        className="w-full max-w-md rounded-md border border-[#ead8c4] bg-[#fffaf4] p-6 text-center shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby="welcome-title"
      >
        <p className="text-sm font-semibold uppercase tracking-normal text-[#9a6a45]">
          Cooking Now
        </p>
        <h2 id="welcome-title" className="mt-3 text-3xl font-bold text-[#3f2b20]">
          Bienvenido, {userName}
        </h2>
        <p className="mt-3 text-[#765744]">
          Qué gusto tenerte de vuelta. Ya puedes guardar tus recetas favoritas y
          preparar algo delicioso.
        </p>
        <button
          type="button"
          onClick={() => setUserName("")}
          className="mt-6 rounded-md border border-[#d6b89a] bg-white px-5 py-2 text-sm font-semibold text-[#6f4e37] shadow-sm transition hover:border-[#b98c67] hover:bg-[#f3e2d0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9a6a45]"
        >
          Continuar
        </button>
      </section>
    </div>
  );
}
