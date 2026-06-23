import Image from "next/image";
import { Box, Typography } from "@mui/material";
import { RegisterForm } from "../components/RegisterForm";

export default function RegisterPage() {
  return (
    <Box
      component="main"
      sx={{
        minHeight: "100vh",
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
            px: 8,
          }}
        >
          <Box>
            <Typography
              variant="h2"
              color="white"
              sx={{fontWeight:700, maxWidth:520}}
              
            >
              Comparte tu pasión por la buena comida
            </Typography>

            <Typography 
            color="white"
            sx={{mt:2, fontSize:20, maxWidth:440}} 
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
            xs: 3,
            md: 8,
          },
          py: 6,
          backgroundColor: "#fafafa",
        }}
      >
        <RegisterForm />
      </Box>
    </Box>
  );
}