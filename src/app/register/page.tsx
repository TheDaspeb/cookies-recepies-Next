import Image from "next/image";
import { Box, Typography } from "@mui/material";
import { RegisterForm } from "../components/RegisterForm";

export default function RegisterPage() {
  return (
    <Box
      component="main"
      sx={{
        minHeight: { xs: "calc(100svh - 4rem)", lg: "calc(100svh - 73px)" },
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          md: "1fr 1fr",
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          display: {
            xs: "none",
            md: "block",
          },
        }}
      >
        <Image
          src="/images/register-dinner.jpeg"
          alt="Cena elegante"
          fill
          priority
          style={{
            objectFit: "cover",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.75), rgba(0,0,0,0.25))",
            display: "flex",
            alignItems: "center",
            px: { md: 5, lg: 8 },
          }}
        >
          <Box>
            <Typography
              component="h1"
              color="white"
              sx={{
                fontSize: { md: "2.5rem", lg: "3.75rem" },
                fontWeight: 700,
                lineHeight: 1.1,
                maxWidth: 520,
              }}
            >
              Comparte tu pasión por la buena comida
            </Typography>

            <Typography 
            color="white"
            sx={{ mt: 2, fontSize: { md: 18, lg: 20 }, maxWidth: 440 }}
            >
              Guarda tus recetas favoritas y descubre nuevos sabores.
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          px: {
            xs: 2,
            sm: 4,
            md: 5,
            lg: 8,
          },
          py: { xs: 5, sm: 6 },
          backgroundColor: "#fffaf4",
        }}
      >
        <RegisterForm />
      </Box>
    </Box>
  );
}
