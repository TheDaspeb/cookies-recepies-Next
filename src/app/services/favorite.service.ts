import { prisma } from "../lib/prisma";

export const favoriteService = {
  async toggleFavorite(userId: string, recipeId: string) {
    const favorite = await prisma.favorite.findUnique({
      where: {
        userId_recipeId: {
          userId,
          recipeId,
        },
      },
    });

    if (favorite) {
      await prisma.favorite.delete({
        where: { id: favorite.id },
      });

      return { message: "Receta eliminada de favoritos" };
    }

    await prisma.favorite.create({
      data: {
        userId,
        recipeId,
      },
    });

    return { message: "Receta agregada a favoritos" };
  },

  getUserFavorites(userId: string) {
    return prisma.favorite.findMany({
      where: { userId },
      include: {
        recipe: true,
      },
    });
  },
};