import { recipes } from "@/src/data/recipes";

export const recipeService = {
  getAll() {
    return recipes.map(({ id, name, image, prepTime, difficulty }) => ({
      id,
      name,
      image,
      prepTime,
      difficulty,
    }));
  },

  getById(id: string) {
    const recipe = recipes.find((item) => item.id === id);

    if (!recipe) {
      return null;
    }

    return {
      ...recipe,
      _count: {
        favorites: 0,
      },
    };
  },

  getCatalog() {
    return recipes.map(({ id, name, image, prepTime, difficulty }) => ({
      id,
      name,
      image,
      prepTime,
      difficulty,
    }));
  },

  getByIds(ids: string[]) {
    const idSet = new Set(ids);

    return recipes
      .filter((recipe) => idSet.has(recipe.id))
      .map(({ id, name, image, prepTime, difficulty }) => ({
        id,
        name,
        image,
        prepTime,
        difficulty,
      }));
  },

  getDetails(id: string) {
    const recipe = recipes.find((item) => item.id === id);

    if (!recipe) {
      return null;
    }

    return {
      ...recipe,
      _count: {
        favorites: 0,
      },
    };
  },
};
