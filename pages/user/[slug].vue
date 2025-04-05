<script lang="ts" setup>
const route = useRoute();
const slug = route.params.slug;
</script>

<template>
  <NuxtLayout name="user">
    <h1>User Page {{ slug }}</h1>
  </NuxtLayout>
</template>

<style scoped></style>
