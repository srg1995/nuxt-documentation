<script lang="ts" setup>
const route = useRoute();
const slug = route.params.slug;
</script>

<template>
  <NuxtLayout name="user">
    <section class="py-8">
      <div class="container mx-auto px-4">
        <h1 class="text-3xl font-bold mb-4 text-green-700">
          User Page {{ slug }}
        </h1>
        <p class="text-lg">Esta es la pagina de usuarios generalizada</p>
      </div>
    </section>
  </NuxtLayout>
</template>

<style scoped></style>
