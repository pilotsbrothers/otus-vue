<template>
  <section>
    <el-row>
      <el-col class="item-block" :span="6"  v-for="item in goods" :key="item">
        <item-element :item="item" @change-order="changeOrder"></item-element>
      </el-col>
    </el-row>
  </section>
</template>

<script setup>
  import { ElCol, ElRow } from 'element-plus'
  import ItemElement from "./ItemElement.vue";
  import {onMounted, ref} from "vue";
  import axios from "axios";

  const goods = ref()

  onMounted(() => {
    axios.get('https://fakestoreapi.com/products').then((response) => {
      goods.value = response.data
      goods.value.forEach((item) => {
        item.inOrder = false
      })
    })

  })
  function changeOrder(data)
  {
      goods.value.forEach( (item) => {
        if(item.id === data[1].id) {
          item.inOrder = data[0]
        }
      })
  }
</script>

<style scoped>
  .item-block{
    padding:20px;
  }
</style>
