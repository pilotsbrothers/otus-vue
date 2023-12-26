<template>
  <template v-if="isLoading">
    <header-component />
    <search v-model="searchGoods"></search>
    <list-items :data="items" :search="searchGoods"></list-items>
  </template>
</template>


<script setup>
import ListItems from '../components/ListItems.vue'
import Search from '../components/Inputs/SearchInput.vue'
import DataApi from '../services/DataApi'
import {onMounted, ref} from "vue";
import HeaderComponent from "../components/HeaderComponent.vue";

const items = ref({})
const isLoading = ref(false)
const searchGoods = ref('')

onMounted(() => {
    DataApi.getItems().then((data) => {
      items.value = data
      isLoading.value = true
    })
  }
)


</script>

<style scoped>
</style>