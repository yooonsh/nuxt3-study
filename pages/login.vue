<template>
  <h2>login</h2>
</template>

<script lang="ts" setup>
const { $api }: any = useNuxtApp();

const variables = {
  email: "sunghe1016@naver.com",
  password: "1234",
};

const { data: loginData } = await $api.login(variables);
console.log(loginData.login.jwtToken);
</script>
