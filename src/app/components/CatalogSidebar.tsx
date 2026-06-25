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
      className="border-b border-[#e6d2bd] bg-[#fffaf4] shadow-sm lg:fixed lg:bottom-0 lg:left-0 lg:top-[73px] lg:z-30 lg:w-80 lg:border-b-0 lg:border-r"
      aria-label="Catálogo de recetas"
    >
      <div className="mx-auto flex h-full max-w-7xl flex-col">
        <div className="px-4 py-3 sm:px-6 lg:border-b lg:border-[#e6d2bd] lg:px-5 lg:py-4">
          <p className="hidden text-sm font-semibold text-[#9a6a45] lg:block">
            Cooking Now
          </p>

          <div className="grid grid-cols-2 gap-2 lg:mt-3 lg:grid-cols-1">
            <button
              type="button"
              onClick={() => router.push("/?view=catalog")}
              className="flex min-h-11 w-full items-center justify-center gap-2 rounded-md border border-[#d6b89a] bg-white px-3 py-2 text-sm font-semibold text-[#6f4e37] shadow-sm transition hover:border-[#b98c67] hover:bg-[#f3e2d0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9a6a45] lg:justify-start lg:px-4 lg:text-left"
            >
              <MenuBookIcon fontSize="small" />
              Catálogo
            </button>

            <button
              type="button"
              onClick={handleFavoritesClick}
              className="flex min-h-11 w-full items-center justify-center gap-2 rounded-md border border-[#d6b89a] bg-white px-3 py-2 text-sm font-semibold text-[#6f4e37] shadow-sm transition hover:border-[#b98c67] hover:bg-[#f3e2d0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9a6a45] lg:justify-start lg:px-4 lg:text-left"
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
