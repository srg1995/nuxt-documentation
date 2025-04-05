<script lang="ts" setup></script>
<template>
  <div class="min-h-screen flex flex-col">
    <header class="bg-gray-900 text-white p-4">
      <Navbar />
    </header>

    <main class="flex-1 container mx-auto p-4">
      <h1 class="text-center text-3xl font-bold underline">
        Layout personalizado de usuario
      </h1>
      <slot />
    </main>

    <footer class="bg-gray-100 text-center p-4">
      © 2025 Sergio Sacristán Santero. Todos los derechos reservados.
    </footer>
  </div>
</template>

<style scoped></style>
