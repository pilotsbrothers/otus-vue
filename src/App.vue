<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
  </header>

  <list-items></list-items>

</template>


<script setup>
import ListItems from './components/ListItems.vue'
</script>

<style scoped>
header {
  display: inline-block;
  width: 100%;
  text-align: center;
}
</style>
