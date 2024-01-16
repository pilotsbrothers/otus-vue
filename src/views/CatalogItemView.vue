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
import {useStore} from "vuex";
const props = defineProps(['id'])
const store = useStore()

const item = computed(() => {
  let item = {}
  store.state.app.items.forEach((el) => {
    if(parseInt(props.id) === parseInt(el.id)){
      item = el
    }
  })
  return item
})
</script>