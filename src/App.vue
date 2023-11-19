<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
  </header>

  <list-items :data="items"></list-items>

</template>


<script setup>
import ListItems from './components/ListItems.vue'
import axios from 'axios'
import {ref, onMounted} from "vue";

const items = ref({});

onMounted( () => {
    axios.get('https://fakestoreapi.com/products').then((response) => {
      items.value = response.data
    })
  }
)


</script>

<style scoped>
header {
  display: inline-block;
  width: 100%;
  text-align: center;
}
</style>
