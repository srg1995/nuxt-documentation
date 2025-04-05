<script lang="ts" setup>
const route = useRoute();
const slug = route.params.slug;
</script>

<template>
  <h1>User Page {{ slug }}</h1>
</template>

<style scoped></style>
