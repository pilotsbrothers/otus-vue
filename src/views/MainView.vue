<template>
  <MainLayout>
    <template #main>
      <template v-if="isLoading">
        <search v-model="searchGoods" />
        <list-items :data="items" :search="searchGoods" />
      </template>
    </template>
  </MainLayout>
</template>


<script setup>
import ListItems from '../components/ListItems.vue'
import Search from '../components/Inputs/SearchInput.vue'
import DataApi from '../services/DataApi'
import {onMounted, ref} from "vue";
import MainLayout from "../layout/MainLayout.vue";

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