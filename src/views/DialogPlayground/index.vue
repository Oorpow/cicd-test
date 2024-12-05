<template>
  <div>
    <button @click="visible = !visible">open dialog</button>
    <Dialog v-model:visible="visible" />
  </div>
</template>

<script setup lang="ts">
import Dialog from '@/components/Dialog.vue'
import { ref } from 'vue'

const visible = ref(false)
</script>
