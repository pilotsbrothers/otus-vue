<template>
  <section>
    <el-row>
      <el-col :span="6"  v-for="item in data" :key="item">
        <item-element :item="item"></item-element>
      </el-col>
    </el-row>
  </section>
</template>

<script setup>
  import { ElCol, ElRow } from 'element-plus'
  import ItemElement from "./ItemElement.vue";

  defineProps(['data'])
</script>

<style scoped>

</style>
