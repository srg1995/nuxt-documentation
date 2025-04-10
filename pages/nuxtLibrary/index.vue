<template>
  <NuxtLayout>
    <div>
      <AccordionComponent />

      <TableComponent />
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import AccordionComponent from "~/components/nuxtUi/AccordionComponent.vue";

import TableComponent from "~/components/nuxtUi/TableComponent.vue";
</script>

<style scoped></style>
