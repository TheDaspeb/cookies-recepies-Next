import { cookies } from "next/headers";
import Link from "next/link";
import {
  FAVORITES_COOKIE_NAME,
  getUserFavoriteRecipeIds,
} from "./lib/favorites-cookie";
import { verifyToken } from "./lib/jwt";
import { recipeService } from "./services/recipe.service"; 
import { RecipeCard } from "./components/RecipeCard";
import { CatalogSidebar } from "./components/CatalogSidebar";

type HomePageProps = {
  searchParams: Promise<{ view?: string }>;
};

export default async function HomePage({ searchParams }: HomePageProps) {
  const { view } = await searchParams;
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  const session = token ? verifyToken(token) : null;
  const favoriteRecipeIds = session
    ? getUserFavoriteRecipeIds(
        cookieStore.get(FAVORITES_COOKIE_NAME)?.value,
        session.userId
      )
    : [];
  const favoriteRecipeIdSet = new Set(favoriteRecipeIds);
  const isFavoritesView = view === "favorites";
  const isCatalogView = view === "catalog";
  const recipes = isFavoritesView
    ? recipeService.getByIds(favoriteRecipeIds)
    : isCatalogView
      ? recipeService.getAll()
      : [];

  return (
    <main className="min-h-screen bg-[#fffaf4] lg:pl-[320px]">
      <CatalogSidebar isAuthenticated={session !== null} />

      {isCatalogView || isFavoritesView ? (
        <section
          id="catalogo-recetas"
          className="mx-auto w-full max-w-6xl px-5 py-10"
          aria-labelledby="catalogo-recetas-title"
        >
          <div className="mb-8 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-normal text-[#9a6a45]">
              {isFavoritesView ? "Favoritos" : "Catálogo de recetas"}
            </p>
            <h1
              id="catalogo-recetas-title"
              className="mt-2 text-4xl font-bold text-[#3f2b20]"
            >
              {isFavoritesView ? "Tus recetas favoritas" : "Recetas de cocina"}
            </h1>
            <p className="mt-3 text-lg text-[#765744]">
              {isFavoritesView
                ? "Aquí aparecen las recetas que guardaste con el corazón."
                : "Explora recetas disponibles sin iniciar sesión."}
            </p>
          </div>

          {recipes.length > 0 ? (
            <div className="grid auto-rows-fr gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {recipes.map((recipe) => (
                <RecipeCard
                  key={recipe.id}
                  id={recipe.id}
                  name={recipe.name}
                  image={recipe.image}
                  prepTime={recipe.prepTime}
                  difficulty={recipe.difficulty}
                  initialIsFavorite={favoriteRecipeIdSet.has(recipe.id)}
                  isAuthenticated={session !== null}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-md border border-[#ead8c4] bg-white px-5 py-6 text-[#765744]">
              {isFavoritesView
                ? "Aún no has agregado recetas a favoritos."
                : "No hay recetas disponibles en este momento."}
            </div>
          )}
        </section>
      ) : (
        <section
          className="relative flex min-h-[calc(100vh-73px)] items-center bg-cover bg-center px-6 py-16"
          style={{ backgroundImage: "url('/images/login-dinner.webp')" }}
        >
          <div className="absolute inset-0 bg-[#2d1a10]/55" />
          <div className="relative max-w-3xl text-white">
            <p className="text-sm font-bold uppercase tracking-normal text-[#f3d6ba]">
              Cenas memorables empiezan aquí
            </p>
            <h1 className="mt-4 text-5xl font-bold leading-tight sm:text-6xl">
              Cooking Now
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-[#fff3e8]">
              Descubre ideas sencillas, aromas irresistibles y recetas pensadas
              para convertir cualquier noche en una cena deliciosa. Elige una
              receta, prende la cocina y prepara algo que todos quieran repetir.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/?view=catalog"
                className="rounded-md border border-[#f3d6ba] bg-white px-5 py-3 text-sm font-bold text-[#6f4e37] shadow-sm transition hover:bg-[#f3e2d0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Ver catálogo
              </Link>
              <Link
                href="/login"
                className="rounded-md border border-white/70 bg-white/10 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Iniciar sesión
              </Link>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
