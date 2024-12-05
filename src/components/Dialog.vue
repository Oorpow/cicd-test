<template>
  <Teleport to="body">
    <div v-if="visibleModel" ref="dialogRef" class="modal">
      <div>
        <button title="Close" @click="visibleModel = false">𝖷</button>
        <p>Demo Modal</p>
        <p>Click outside of the modal to close it.</p>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

const dialogRef = ref<HTMLDivElement | null>(null)

const visibleModel = defineModel('visible', {
  required: true,
  default: false
})

onClickOutside(dialogRef, () => {
  visibleModel.value = false
})
</script>

<style scoped>
.dialog {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 420px;
  max-width: 100%;
  z-index: 10;
}
</style>
