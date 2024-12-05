<script setup lang="ts">
const props = defineProps<{ modelValue: string }>()
const emits = defineEmits(['update:modelValue'])

</script>

<template>
  <div>
    <input
      type="text"
      :value="props.modelValue"
      @input="emits('update:modelValue', $event.target.value)"
    />
  </div>
</template>
