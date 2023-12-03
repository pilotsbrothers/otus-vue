<template>
  <template v-if="isLoading">
    <header>
      <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125"/>
    </header>
    <create-goods @create-good="createGood"></create-goods>
    <search v-model="searchGoods"></search>
    <list-items :data="items" :search="searchGoods"></list-items>
  </template>
</template>


<script setup>
import ListItems from './components/ListItems.vue'
import Search from './components/Inputs/SearchInput.vue'
import CreateGoods from './components/Forms/CreateGood.vue'
import DataApi from './services/DataApi'
import {onMounted, ref} from "vue";

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

function createGood(el){
  let maxId = 0
  items.value.forEach((item) => {
    if(maxId <= item.id) maxId = item.id
  })
  el.id = maxId + 1
  items.value.push(el)
}

</script>

<style scoped>
header {
  display: inline-block;
  width: 100%;
  text-align: center;
}
</style>
