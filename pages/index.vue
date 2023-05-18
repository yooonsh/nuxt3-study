<template>
  <ul>
    <nuxt-child path="/course" replace></nuxt-child>
    <li v-for="(item, index) in products" :key="index">
      {{ item.name }}
    </li>
  </ul>
</template>

<script lang="ts" setup>
import type { ProductResponse } from "~/types";
import type { client } from "~/utils/query";

// console.log(client.query.getProduct);

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
