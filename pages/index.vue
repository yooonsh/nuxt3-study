<template>
  <ul>
    <li v-for="(item, index) in products" :key="index">
      {{ item.name }}
    </li>
  </ul>
</template>

<script lang="ts" setup>
import type { ProductResponse } from "~/types";
const query = gql`
  query {
    getProducts {
      id
      name
      price
      description
      category {
        id
        name
        createdAt
        updatedAt
      }
      productImages {
        id
        imageUrl
        isMain
      }
    }
  }
`;

const { data } = await useAsyncQuery<ProductResponse>(query);

const products = data?.value?.getProducts;
console.log(products);
</script>
