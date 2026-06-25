import { recipeService } from "@/src/app/services/recipe.service";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function RecipeDetailPage({ params }: Props) {
  const { id } = await params;
  const recipe = await recipeService.getById(id);

  if (!recipe) notFound();

  return (
    <main className="min-h-[calc(100svh-4rem)] bg-[#fffaf4] px-3 py-5 sm:px-6 sm:py-8 lg:min-h-[calc(100svh-73px)] lg:px-8 lg:py-10">
      <article className="mx-auto max-w-6xl overflow-hidden rounded-xl border border-[#ead8c4] bg-white shadow-sm">
        <div
          className="aspect-[16/10] min-h-52 bg-cover bg-center sm:aspect-[16/8] lg:aspect-[16/6]"
          role="img"
          aria-label={recipe.name}
          style={{ backgroundImage: `url(${recipe.image})` }}
        />

        <div className="grid min-w-0 gap-8 p-4 sm:p-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:p-8">
          <section className="min-w-0">
            <Link
              href="/"
              className="text-sm font-semibold text-[#9a6a45] transition hover:text-[#6f4e37]"
            >
              Volver al catálogo
            </Link>

            <h1 className="mt-4 break-words text-3xl font-bold tracking-tight text-[#3f2b20] sm:text-4xl lg:text-5xl">
              {recipe.name}
            </h1>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <DetailStat label="Tiempo" value={recipe.prepTime} />
              <DetailStat label="Dificultad" value={recipe.difficulty} />
              <DetailStat label="Porciones" value={`${recipe.portions}`} />
            </div>

            <section className="mt-8">
              <h2 className="text-xl font-bold text-[#3f2b20] sm:text-2xl">
                Ingredientes
              </h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {recipe.ingredients.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-[#ead8c4] bg-[#fffaf4] px-4 py-3 text-[#5a3c2b]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="text-xl font-bold text-[#3f2b20] sm:text-2xl">
                Preparación
              </h2>
              <ol className="mt-4 grid gap-4">
                {recipe.steps.map((step, index) => (
                  <li
                    key={step}
                    className="grid min-w-0 grid-cols-[36px_minmax(0,1fr)] gap-3 rounded-md border border-[#ead8c4] bg-[#fffdf9] p-3 text-[#5a3c2b] sm:p-4"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-md bg-[#6f4e37] text-sm font-bold text-white">
                      {index + 1}
                    </span>
                    <span className="min-w-0 break-words leading-7">{step}</span>
                  </li>
                ))}
              </ol>
            </section>
          </section>

          <aside className="min-w-0 h-fit rounded-md border border-[#ead8c4] bg-[#fffaf4] p-4 sm:p-5">
            <h2 className="text-lg font-bold text-[#3f2b20]">
              Información completa
            </h2>

            <dl className="mt-4 grid gap-3 text-sm">
              <DetailItem label="ID" value={recipe.id} />
              <DetailItem label="Nombre" value={recipe.name} />
              <DetailItem label="Imagen" value={recipe.image} />
              <DetailItem label="Tiempo" value={recipe.prepTime} />
              <DetailItem label="Dificultad" value={recipe.difficulty} />
              <DetailItem label="Porciones" value={`${recipe.portions}`} />
              <DetailItem
                label="Ingredientes"
                value={`${recipe.ingredients.length}`}
              />
              <DetailItem label="Pasos" value={`${recipe.steps.length}`} />
              <DetailItem
                label="Favoritos"
                value={`${recipe._count.favorites}`}
              />
              <DetailItem
                label="Creada"
                value={recipe.createdAt.toLocaleDateString("es-CO")}
              />
            </dl>
          </aside>
        </div>
      </article>
    </main>
  );
}

function DetailStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-[#ead8c4] bg-[#fffaf4] px-4 py-3">
      <p className="text-sm font-semibold text-[#9a6a45]">{label}</p>
      <p className="mt-1 text-lg font-bold text-[#3f2b20]">{value}</p>
    </div>
  );
}

function DetailItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="font-semibold text-[#9a6a45]">{label}</dt>
      <dd className="mt-1 break-all text-[#5a3c2b]">{value}</dd>
    </div>
  );
}
