"use client";

import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useRouter } from "next/navigation";
import { useState } from "react";

type FavoriteButtonProps = {
  initialIsFavorite: boolean;
  recipeId: string;
  recipeName: string;
};

export function FavoriteButton({
  initialIsFavorite,
  recipeId,
  recipeName,
}: FavoriteButtonProps) {
  const router = useRouter();
  const [isFavorite, setIsFavorite] = useState(initialIsFavorite);
  const [isLoading, setIsLoading] = useState(false);

  async function handleClick() {
    setIsLoading(true);

    try {
      const response = await fetch(`/api/favorites/${recipeId}`, {
        method: "POST",
      });

      if (response.status === 401) {
        window.location.href = "/login?redirectTo=/?view=catalog";
        return;
      }

      if (!response.ok) {
        return;
      }

      const data = (await response.json()) as { isFavorite: boolean };
      setIsFavorite(data.isFavorite);
      router.refresh();
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={isLoading}
      className="inline-flex min-h-10 items-center justify-center rounded-md border border-[#d6b89a] bg-white px-3 text-[#6f4e37] shadow-sm transition hover:border-[#b98c67] hover:bg-[#f3e2d0] disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9a6a45]"
      aria-label={`${isFavorite ? "Quitar" : "Agregar"} ${recipeName} de favoritos`}
      title={isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
    >
      {isFavorite ? (
        <FavoriteIcon fontSize="small" />
      ) : (
        <FavoriteBorderIcon fontSize="small" />
      )}
    </button>
  );
}
