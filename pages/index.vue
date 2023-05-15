<!-- reactive -->
<template>
  <div>{{ state.count }}</div>
  <div>{{ state.doubled }}</div>
</template>

<script setup>
const state = reactive({
  count: 1,
  doubled: computed(() => state.count * 2),
});

const set = new Set(["apple", "banana", "orange"]);

// set 값 순회
set.forEach((val, val2, set) => {
  console.log(val, val2, set);
});

console.log(state.count); // 1
</script>
