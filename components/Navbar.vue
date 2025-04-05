<script lang="ts" setup>
const username = "1";
</script>

<template>
  <nav class="container mx-auto flex justify-between">
    <NuxtLink to="/" class="font-bold">Nuxt Documentation</NuxtLink>
    <ul class="flex gap-4">
      <li>
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/users">Users</NuxtLink>
      </li>
      <li>
        <NuxtLink :to="`/users/${username}`">User{{ username }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped></style>
