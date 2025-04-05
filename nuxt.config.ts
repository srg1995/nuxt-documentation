import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  ssr: true, // Habilitamos SSR por defecto
  target: "static", // Esto asegura que Nuxt genere un sitio estático cuando hacemos build
  // Rutas estáticas para los usuarios
  generate: {
    routes: async (): Promise<string[]> => {
      const users: { id: number; name: string; email: string }[] = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      ).then((res) => res.json());
      return users.map((user) => `/users/${user.id}`);
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  css: ["~/assets/css/main.css"],
  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxt/test-utils",
    "@nuxt/ui",
  ],
});
