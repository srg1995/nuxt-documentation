<script lang="ts" setup>
const username = "User1";
</script>

<template>
  <nav class="container mx-auto flex justify-between">
    <NuxtLink to="/" class="font-bold">Nuxt Documentation</NuxtLink>
    <ul class="flex gap-4">
      <li>
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/user">User</NuxtLink>
      </li>
      <li>
        <NuxtLink :to="`/user/${username}`">{{ username }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped></style>
