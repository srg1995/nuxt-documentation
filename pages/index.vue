<script lang="ts" setup>
import { useUserAdminStore } from "~/stores/userAdmin";

const username = ref("");
const userAdmin = useUserAdminStore();

const handleLogin = () => {
  console.log(username.value);
  userAdmin.login(username.value);
};
const handleLogout = () => {
  console.log(username.value);
  userAdmin.logout();
};
</script>

<template>
  <NuxtLayout>
    <section class="py-8">
      <div class="container mx-auto px-4">
        <h1 class="text-3xl font-bold mb-4 text-green-700">Home Page</h1>
        <p class="text-lg">Esta es la pagina principal de la aplicación</p>
        <form
          class="flex flex-col gap-4 p-4 max-w-sm mx-auto bg-gray-100 shadow rounded"
        >
          <p class="p-4 text-xl font-semibold text-center">
            Ingrese su nombre de usuario
          </p>
          <input
            v-model="username"
            type="text"
            placeholder="Identificarse como admin"
            class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div class="flex justify-center gap-8">
            <button
              class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
              @click.prevent="handleLogin"
            >
              Login
            </button>
            <button
              class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
              @click.prevent="handleLogout"
            >
              Logout
            </button>
          </div>
        </form>

        <h3
          v-if="userAdmin?.isAuthenticated"
          class="text-center mt-4 text-lg font-semibold text-green-700"
        >
          Usuario autenticado como: {{ userAdmin?.name }}
        </h3>
        <h3 v-else class="text-center mt-4 text-lg font-semibold text-red-700">
          No esta autenticado
        </h3>
      </div>
    </section>
  </NuxtLayout>
</template>

<style scoped></style>
