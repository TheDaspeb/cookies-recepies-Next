import { cookies } from "next/headers";
import {
  FAVORITES_COOKIE_NAME,
  parseFavoritesCookie,
  serializeFavoritesCookie,
} from "@/src/app/lib/favorites-cookie";
import { verifyToken } from "@/src/app/lib/jwt";
import { recipeService } from "@/src/app/services/recipe.service";

export async function POST(
  _request: Request,
  context: RouteContext<"/api/favorites/[recipeId]">
) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  const session = token ? verifyToken(token) : null;

  if (!session) {
    return Response.json({ message: "No autorizado" }, { status: 401 });
  }

  const { recipeId } = await context.params;
  const recipe = recipeService.getById(recipeId);

  if (!recipe) {
    return Response.json({ message: "Receta no encontrada" }, { status: 404 });
  }

  const favorites = parseFavoritesCookie(
    cookieStore.get(FAVORITES_COOKIE_NAME)?.value
  );
  const userFavorites = new Set(favorites[session.userId] ?? []);

  if (userFavorites.has(recipeId)) {
    userFavorites.delete(recipeId);
  } else {
    userFavorites.add(recipeId);
  }

  favorites[session.userId] = Array.from(userFavorites);

  cookieStore.set(FAVORITES_COOKIE_NAME, serializeFavoritesCookie(favorites), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });

  return Response.json(
    {
      isFavorite: userFavorites.has(recipeId),
      message: userFavorites.has(recipeId)
        ? "Receta agregada a favoritos"
        : "Receta eliminada de favoritos",
    },
    { status: 200 }
  );
}
