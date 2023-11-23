<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
  </header>

  <list-items :data="items"></list-items>

</template>


<script setup>
import ListItems from './components/ListItems.vue'
import DataApi from './services/DataApi'
import {ref, onMounted} from "vue";

const items = ref({});

onMounted( () => {
    DataApi.getItems().then( (data) => items.value = data)
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
