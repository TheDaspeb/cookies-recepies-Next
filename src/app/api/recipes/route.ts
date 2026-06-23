import { recipeService } from "@/src/app/services/recipe.service";

export async function GET() {
  try {
    const recipes = await recipeService.getAll();

    return Response.json(
      {
        data: recipes,
      },
      { status: 200 }
    );
  } catch {
    return Response.json(
      {
        message: "Error al obtener el catálogo de recetas",
      },
      { status: 500 }
    );
  }
}
