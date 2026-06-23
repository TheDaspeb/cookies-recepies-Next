type FavoritesStore = Record<string, string[]>;

const FAVORITES_COOKIE_NAME = "favoriteRecipes";

export { FAVORITES_COOKIE_NAME };

export function parseFavoritesCookie(value?: string): FavoritesStore {
  if (!value) {
    return {};
  }

  try {
    const parsedValue = JSON.parse(decodeURIComponent(value));

    if (!parsedValue || typeof parsedValue !== "object") {
      return {};
    }

    return Object.entries(parsedValue).reduce<FavoritesStore>(
      (favorites, [userId, recipeIds]) => {
        if (Array.isArray(recipeIds)) {
          favorites[userId] = recipeIds.map(String);
        }

        return favorites;
      },
      {}
    );
  } catch {
    return {};
  }
}

export function serializeFavoritesCookie(favorites: FavoritesStore) {
  return encodeURIComponent(JSON.stringify(favorites));
}

export function getUserFavoriteRecipeIds(value: string | undefined, userId: string) {
  const favorites = parseFavoritesCookie(value);

  return favorites[userId] ?? [];
}
