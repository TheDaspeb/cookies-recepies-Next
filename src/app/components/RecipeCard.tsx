import Link from "next/link";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { FavoriteButton } from "./FavoriteButton";

type RecipeCardProps = {
  id: string;
  name: string;
  image: string;
  prepTime: string;
  difficulty: string;
  initialIsFavorite?: boolean;
  isAuthenticated?: boolean;
};

export function RecipeCard({
  id,
  name,
  image,
  prepTime,
  difficulty,
  initialIsFavorite = false,
  isAuthenticated = false,
}: RecipeCardProps) {
  return (
    <Card
      sx={{
        height: "100%",
        minHeight: 340,
        display: "flex",
        flexDirection: "column",
        borderRadius: 2,
        border: "1px solid #ead8c4",
        boxShadow: "0 12px 28px rgba(111, 78, 55, 0.1)",
        overflow: "hidden",
      }}
    >
      <Link href={`/recipes/${id}`}>
        <CardMedia
          component="img"
          image={image}
          alt={name}
          sx={{
            aspectRatio: "4 / 3",
            display: "block",
            height: 220,
            objectFit: "cover",
            width: "100%",
          }}
        />
      </Link>

      <CardContent
        sx={{
          backgroundColor: "#fffdf9",
          display: "flex",
          flex: 1,
          flexDirection: "column",
          p: 2,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: "#3f2b20",
            fontSize: "1.05rem",
            fontWeight: 700,
            lineHeight: 1.25,
            minHeight: 42,
          }}
        >
          {name}
        </Typography>

        <Typography sx={{ mt: "auto", color: "#765744", fontSize: "0.9rem" }}>
          Tiempo: {prepTime}
        </Typography>
        <Typography sx={{ color: "#765744", fontSize: "0.9rem" }}>
          Dificultad: {difficulty}
        </Typography>

        <div className="mt-4 flex items-center gap-2">
          {isAuthenticated && (
            <FavoriteButton
              initialIsFavorite={initialIsFavorite}
              recipeId={id}
              recipeName={name}
            />
          )}

          <Link
            href={`/recipes/${id}`}
            className="inline-flex min-h-10 flex-1 items-center justify-center rounded-md border border-[#d6b89a] bg-white px-4 py-2 text-sm font-semibold text-[#6f4e37] shadow-sm transition hover:border-[#b98c67] hover:bg-[#f3e2d0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9a6a45]"
          >
            View more
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
