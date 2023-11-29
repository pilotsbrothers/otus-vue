<template>
  <el-card class="item" @click="dialogVisible = true">
    {{ item.title}}
  </el-card>

  <el-dialog
    v-model="dialogVisible"
    title="Товар"
    width="30%"
  >
    <img width="100%" :src="item.image" alt="">
    <span class="title">{{ item.title }}</span>
    <div class="price">{{ item.price }} &#8364;</div>
    <div class="description">{{ item.description }}</div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Отмена</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { ElCard, ElDialog, ElButton } from 'element-plus'
import {ref} from "vue"

defineProps(['item'])
const dialogVisible = ref(false)

</script>

<style scoped>
.item {
  padding: 18px 0;
  margin-bottom: 20px;
  margin-right: 20px;
  min-height: 130px;
  cursor: pointer;
}

.el-dialog__body img{
  width: 100%;
}
.title{
  font-weight: bold;
  font-size: 22px;
}
.price{
  font-size:18px;
  color: red;
}
.description{
  font-size:14px;
  color:grey;
}
</style>
