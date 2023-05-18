<template>
  <h2>login</h2>
</template>

<script lang="ts" setup>
import type { UserLoginResponse } from "~/types";

const query = gql`
  mutation {
    getUser(loginUserRequest: { email: "sunghe1016@naver.com", password: "1234" }) {
      userId
      jwtToken
    }
  }
`;

const data = useMutation<UserLoginResponse>(query);

console.log(data.loading);
</script>
