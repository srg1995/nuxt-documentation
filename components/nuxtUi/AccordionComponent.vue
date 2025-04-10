<template>
  <div v-if="!items">Loading...</div>
  <UAccordion v-else :items="accordionItems" />
</template>

<script setup lang="ts">
//imports
import { fetchFakeData } from "~/services/faseService";

//Interfaces
interface Item {
  title: string;
  body: string;
}
interface AccordionItem {
  label: string;
  icon: string;
  content: string;
}

//APIS
const { data: items } = useAsyncData<AccordionItem[]>(async () => {
  const data = await fetchFakeData();
  const dataParsed = data.map((item: Item) => {
    return {
      label: item.title,
      icon: "i-lucide-smile",
      content: item.body,
    };
  });

  return dataParsed;
});

//methods
const accordionItems = computed(() => {
  return items.value ?? [];
});
</script>
