<template>
  <input placeholder="Поиск товара" :value="props.modelValue" @input="$emit('update:model-value', $event.target.value)">
</template>

<script setup>
const props = defineProps(['modelValue'])
</script>

<style scoped>
  input {
    width: 100%;
    height: 25px;
    padding: 15px 10px;
  }
</style>
