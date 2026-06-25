"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { WELCOME_STORAGE_KEY } from "./WelcomeModal";

type LoginFormProps = {
  redirectTo?: string;
};

export function LoginForm({ redirectTo = "/" }: LoginFormProps) {
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Error al iniciar sesión");
        return;
      }

      if (data.user?.name) {
        window.sessionStorage.setItem(WELCOME_STORAGE_KEY, data.user.name);
      }

      router.push(redirectTo);
      router.refresh();
    } catch {
      setError("No se pudo conectar con el servidor");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      {error && (
        <div className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          {error}
        </div>
      )}

      <div className="mb-5">
        <label className="mb-2 block font-semibold text-[#3b2518]">
          Correo electrónico
        </label>

        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="tu@email.com"
          className="w-full rounded-xl border border-[#e0c8b2] bg-white px-4 py-4 text-[#3b2518] outline-none transition placeholder:text-gray-400 focus:border-[#b66b36] focus:ring-2 focus:ring-[#f0c9aa]"
        />
      </div>

      <div className="mb-5">
        <label className="mb-2 block font-semibold text-[#3b2518]">
          Contraseña
        </label>

        <input
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          placeholder="********"
          className="w-full rounded-xl border border-[#e0c8b2] bg-white px-4 py-4 text-[#3b2518] outline-none transition placeholder:text-gray-400 focus:border-[#b66b36] focus:ring-2 focus:ring-[#f0c9aa]"
        />
      </div>

      <div className="mb-6 flex flex-col items-start gap-3 text-sm min-[420px]:flex-row min-[420px]:items-center min-[420px]:justify-between">
        <label className="flex items-center gap-2 text-gray-500">
          <input
            type="checkbox"
            className="h-4 w-4 rounded border-[#d6b89a]"
          />
          Recordarme
        </label>

        <Link href="/forgot-password" className="font-medium text-[#b6572b]">
          ¿Olvidaste tu contraseña?
        </Link>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-[#b6572b] py-4 text-lg font-bold text-white shadow-md transition hover:bg-[#9f4823] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Iniciando sesión..." : "Iniciar sesión"}
      </button>

      <div className="my-8 flex items-center gap-4">
        <div className="h-px flex-1 bg-[#e0c8b2]" />
        <span className="shrink-0 text-sm text-gray-400">o continúa con</span>
        <div className="h-px flex-1 bg-[#e0c8b2]" />
      </div>

      <button
        type="button"
        className="w-full rounded-xl border border-[#e0c8b2] bg-white py-4 font-semibold text-[#3b2518] transition hover:bg-[#fff3e8]"
      >
        Continuar con Google
      </button>

      <p className="mt-8 text-center text-gray-500">
        ¿No tienes una cuenta?{" "}
        <Link href="/register" className="font-semibold text-[#b6572b]">
          Regístrate aquí
        </Link>
      </p>
    </form>
  );
}
