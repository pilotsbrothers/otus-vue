<template>
  <MainLayout>
    <template #main>
      <ul>
        <li v-for="element in inOrderGoods" v-bind:key="element">
          <router-link :to="{ 'name': 'CatalogItem', params: { id: element.id } }">{{element.title}}</router-link>
        </li>
      </ul>
      <payment-form :count="count" :price="price"></payment-form>
    </template>
  </MainLayout>
</template>

<script setup>
import PaymentForm from "../components/Forms/PaymentForm.vue";
import {computed, onMounted, ref} from "vue";
import MainLayout from "../layout/MainLayout.vue";

const goods = ref({})
const inOrderGoods = computed(() => {
  let items = [];
  if(goods.value.length > 0) {
    goods.value.forEach((item) => {
      if (item.inOrder === true){
       items.push(item)
      }
    })
  }
  return items
})
const count = ref(0)
const price = computed(() => {
  let price = 0;
  if(goods.value.length > 0) {
    goods.value.forEach((item) => {
      if(item.count !== undefined){
        count.value += item.count
      }
      if (item.inOrder) {
        price += item.price
      }
    })
  }
  return price
})

onMounted(() => {
  goods.value = JSON.parse(localStorage.getItem('items'))
})

</script>