import { recipeService } from "@/src/app/services/recipe.service";
import type { NextRequest } from "next/server";

export async function GET(
  _request: NextRequest,
  context: RouteContext<"/api/recipes/[id]">
) {
  const { id } = await context.params;
  const recipe = await recipeService.getById(id);

  if (!recipe) {
    return Response.json({ message: "Receta no encontrada" }, { status: 404 });
  }

  return Response.json(recipe);
}
