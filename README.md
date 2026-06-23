# Cookies Recipe Project

This project is a cookies recipe website built with [Next.js](https://nextjs.org) and TypeScript.
It lets users browse recipes, register, login, and save favorite recipes in the app.

## Project description

The website is a small recipe platform.
Users can:
- see a list of cookie recipes,
- open recipe pages,
- register a new account,
- login to the site,
- save and remove favorite recipes.

The app also has API routes for authentication and favorites.

## Installation steps

1. Open a terminal in the project folder.
2. Install packages:

```bash
npm install
```

3. Create any environment variables if needed.
   - This project uses local data and simple auth, so no extra setup is needed for a basic run.

## How to run the project

1. Start the development server:

```bash
npm run dev
```

2. Open your browser and go to:

```text
http://localhost:3000
```

3. Use the site to view recipes, register, login, and save favorites.

## How the app works

- The home page is at `app/page.tsx`.
- The login page is at `app/login/page.tsx`.
- The register page is at `app/register/page.tsx`.
- Each recipe page is at `app/recipes/[id]/page.tsx`.
- API routes are located in `app/api/`.

The app uses these folders:
- `src/components/` for UI components such as cards and buttons.
- `src/lib/` for helper functions like JWT, password, and Prisma support.
- `src/services/` for business logic like auth, email, favorites, and recipe services.
- `src/data/recipes.ts` for recipe data used in the app.

## What the project does

- Shows a recipe catalogue.
- Lets users create an account.
- Lets users login and logout.
- Lets users save recipes as favorites.
- Uses Next.js server functions and API routes for data handling.

## More information

- This is a Next.js app with server and client code.
- It is easy to extend with more recipes or new features.
- For changes, edit the files in `app/`, `src/components/`, and `src/services/`.
