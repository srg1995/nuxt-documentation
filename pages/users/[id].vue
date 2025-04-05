<script lang="ts" setup>
const route = useRoute();
const userId = route.params.id;

const {
  data: user,
  pending,
  error,
} = await useAsyncData(`user-${userId}`, () =>
  $fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
);
</script>

<template>
  <NuxtLayout name="user">
    <section class="py-8">
      <h1 class="text-3xl font-bold mb-4 text-green-700">UserId Page</h1>
      <p class="text-xl font-bold text-red-600">Esta pagina usa SSR</p>
      <div class="max-w-3xl mx-auto px-4 py-8">
        <div v-if="pending" class="text-center text-lg text-gray-600">
          Cargando...
        </div>
        <div v-else-if="error" class="text-center text-lg text-red-500">
          Error al cargar los datos.
        </div>
        <div v-else class="">
          <h1 class="text-4xl font-semibold text-center mb-6">
            {{ user.name }}
          </h1>
          <div class="p-6 rounded-lg shadow-md bg-gray-200">
            <p class="text-xl font-medium mb-2">
              <strong>Email:</strong> {{ user.email }}
            </p>
            <p class="text-xl font-medium mb-2">
              <strong>Teléfono:</strong> {{ user.phone }}
            </p>
            <p class="text-xl font-medium mb-2">
              <strong>Compañía:</strong> {{ user.company.name }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>
