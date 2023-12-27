<template>
  <MainLayout>
    <template #main>
      <template v-if="isLoading">
        <search v-model="searchGoods" />
        <list-items :data="store.state.items" :search="searchGoods" />
      </template>
    </template>
  </MainLayout>
</template>


<script setup>
import ListItems from '../components/ListItems.vue'
import Search from '../components/Inputs/SearchInput.vue'
import {onMounted, ref} from "vue";
import MainLayout from "../layout/MainLayout.vue";
import {useStore} from "vuex";

const isLoading = ref(false)
const searchGoods = ref('')
const store = useStore()
onMounted(() => {
  store.dispatch('getItems').then(() => {
    isLoading.value = true
  })
})
</script>

<style scoped>
</style>