<template>
  <header-component />
  <slot name="main" />
</template>

<script setup>
import HeaderComponent from "../components/HeaderComponent.vue";
</script>