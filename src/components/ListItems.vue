<template>
  <section>
    <el-row>
      <el-col class="item-block" :span="6" v-for="item in goods" :key="item">
        <item-element :item="item"></item-element>
      </el-col>
    </el-row>
  </section>
</template>

<script setup>
import {computed} from "vue";
import {ElCol, ElRow} from 'element-plus'
import ItemElement from "./ItemElement.vue";

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
</script>

<style scoped>
.item-block {
  padding: 20px;
}
</style>
