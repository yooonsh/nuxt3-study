<template>
  <ul>
    <nuxt-child path="/course" replace></nuxt-child>
    <li v-for="(item, index) in products" :key="index">
      {{ item.name }}
    </li>
  </ul>
</template>

<script lang="ts" setup>
const { $api }: any = useNuxtApp();
const data = ref();
data.value = await $api.getProduct();

const products = data.value.value.getProducts;
</script>
