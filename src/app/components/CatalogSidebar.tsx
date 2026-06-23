"use client";

import FavoriteIcon from "@mui/icons-material/Favorite";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { useRouter } from "next/navigation";

type CatalogSidebarProps = {
  isAuthenticated: boolean;
};

export function CatalogSidebar({ isAuthenticated }: CatalogSidebarProps) {
  const router = useRouter();

  function handleFavoritesClick() {
    if (!isAuthenticated) {
      router.push("/login?redirectTo=/");
      return;
    }

    router.push("/?view=favorites");
  }

  return (
    <aside
      id="catalog-sidebar"
      className="fixed bottom-0 left-0 top-[73px] z-30 w-[min(88vw,320px)] border-r border-[#e6d2bd] bg-[#fffaf4] shadow-sm"
      aria-label="Catalogo de recetas"
    >
      <div className="flex h-full flex-col">
        <div className="border-b border-[#e6d2bd] px-5 py-4">
          <p className="text-sm font-semibold text-[#9a6a45]">Cooking Now</p>

          <div className="mt-3 grid gap-2">
            <button
              type="button"
              onClick={() => router.push("/?view=catalog")}
              className="flex min-h-10 w-full items-center gap-2 rounded-md border border-[#d6b89a] bg-white px-4 py-2 text-left text-sm font-semibold text-[#6f4e37] shadow-sm transition hover:border-[#b98c67] hover:bg-[#f3e2d0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9a6a45]"
            >
              <MenuBookIcon fontSize="small" />
              Catálogo
            </button>

            <button
              type="button"
              onClick={handleFavoritesClick}
              className="flex min-h-10 w-full items-center gap-2 rounded-md border border-[#d6b89a] bg-white px-4 py-2 text-left text-sm font-semibold text-[#6f4e37] shadow-sm transition hover:border-[#b98c67] hover:bg-[#f3e2d0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9a6a45]"
            >
              <FavoriteIcon fontSize="small" />
              Favoritos
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
