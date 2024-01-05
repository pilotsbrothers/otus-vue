<template>
  <section>
    <el-row>
      <el-col class="item-block" :span="6" v-for="item in goods" :key="item">
        <item-element :item="item" @change-order="changeOrder"></item-element>
      </el-col>
    </el-row>
  </section>

</template>

<script setup>
import {computed, ref} from "vue";
import {ElCol, ElRow} from 'element-plus'
import ItemElement from "./ItemElement.vue";

const count = ref(0)
const props = defineProps(['data', 'search'])


const goods = computed(() => {
  if(props.search !== '') {
    return props.data.filter((el) => {
      return el.title.toLowerCase().includes(props.search.toLowerCase())
    })
  }
  return props.data
  },
  () => {
  })


function changeOrder(data) {
  goods.value.forEach((item) => {
    if (item.id === data[1].id) {
      data[0] ? count.value++ : count.value--
      item.inOrder = data[0]
      if(item.hasOwnProperty('count')){
        data[0] ? item.count++ : item.count--
      } else item.count = 1
    }
  })
  localStorage.setItem('items', JSON.stringify(goods.value))
}
</script>

<style scoped>
.item-block {
  padding: 20px;
}
</style>
