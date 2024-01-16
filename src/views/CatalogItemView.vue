<template>
  <MainLayout>
    <template #main>
      <img width="100%" :src="item.image" alt="">
      <span class="title">{{ item.title }}</span>
      <div class="price">{{ item.price }} &#8364;</div>
      <div class="description">{{ item.description }}</div>
    </template>
  </MainLayout>
</template>

<script setup>
import MainLayout from "../layout/MainLayout.vue";
import {computed} from "vue";
const props = defineProps(['id'])
const item = computed(() => {
  let item = {}
  let items = JSON.parse(localStorage.getItem('items'))
  items.forEach((el) => {
    if(parseInt(props.id) === parseInt(el.id)){
      item = el
    }
  })
  return item
})
</script>