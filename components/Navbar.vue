<script lang="ts" setup>
const username = "usuario1";
</script>

<template>
  <nav>
    <ul>
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
