<script lang="ts" setup>
const {
  data: users,
  pending,
  error,
} = await useAsyncData("users", () =>
  $fetch("https://jsonplaceholder.typicode.com/users")
);
</script>

<template>
  <NuxtLayout name="user">
    <section class="py-8">
      <div class="container mx-auto px-4">
        <h1 class="text-3xl font-bold mb-4 text-green-700">User Page</h1>
        <p class="text-xl font-bold text-red-600">
          Esta es la pagina de usuarios generica configurada en SSG
        </p>
        <div class="max-w-4xl mx-auto px-4 py-8">
          <h1 class="text-3xl font-semibold text-center mb-6">
            Lista de Usuarios
          </h1>
          <ul class="space-y-4">
            <li
              v-for="user in users"
              :key="user.id"
              class="p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <NuxtLink
                :to="`/users/${user.id}`"
                class="text-xl font-medium text-blue-600 hover:text-blue-800"
              >
                {{ user.name }}
              </NuxtLink>
              <p class="text-sm text-gray-500">{{ user.email }}</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>
