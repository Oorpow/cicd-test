<script setup lang="ts">
const props = defineProps<{ modelValue: string }>()
</script>

<template>
  <div>
    <input
      type="text"
      :value="props.modelValue"
    />
  </div>
</template>
