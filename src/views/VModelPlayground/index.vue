<script setup lang="ts">
import UseVModelTest from '@/components/UseVModelTest.vue'
import { ref } from 'vue'

const msg = ref('hello')
</script>

<template>
  <main>
    Parent: {{ msg }}
    <UseVModelTest v-model="msg" />
  </main>
</template>
