"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  Button,
  TextField,
  Typography,
  Alert,
} from "@mui/material";
import { WELCOME_STORAGE_KEY } from "./WelcomeModal";

export function RegisterForm() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);

    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await response.json();

    if (!response.ok) {
      setError(data.message || "Error al crear la cuenta");
      setLoading(false);
      return;
    }

    if (data.user?.name) {
      window.sessionStorage.setItem(WELCOME_STORAGE_KEY, data.user.name);
    }

    router.push("/");
    router.refresh();
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ width: "100%", maxWidth: 460 }}>
      <Typography variant="h3" sx={{fontWeight:700, mb:1}} >
        Crear cuenta
      </Typography>

      <Typography color="text.secondary" sx={{mb:4}}>
        Únete y descubre recetas increíbles.
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <TextField
        fullWidth
        label="Nombre completo"
        name="name"
        value={form.name}
        onChange={handleChange}
        margin="normal"
      />

      <TextField
        fullWidth
        label="Correo electrónico"
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        margin="normal"
      />

      <TextField
        fullWidth
        label="Contraseña"
        name="password"
        type="password"
        value={form.password}
        onChange={handleChange}
        margin="normal"
      />

      <Button
        fullWidth
        type="submit"
        variant="contained"
        disabled={loading}
        sx={{
          mt: 3,
          py: 1.5,
          backgroundColor: "#f04b23",
          fontWeight: 700,
          "&:hover": {
            backgroundColor: "#d93f1c",
          },
        }}
      >
        {loading ? "Creando cuenta..." : "Crear cuenta"}
      </Button>
    </Box>
  );
}
