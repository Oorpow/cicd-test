
<script setup lang="ts">
import { ref } from 'vue';

const list = ref<number[]>([])

const jsonData = (): Promise<number[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([1, 2, 3, 4, 5])
    }, 2000);
  })
}

const initData = async () => {
  const data = await jsonData()
  list.value.push(...data)
}

await initData()
</script>

<template>
  <div v-for="item in list" :key="item">
    {{ item }}
  </div>
</template>
