<template>
  <el-card class="item" @click="dialogVisible.value = true">
    {{ item.title }}
    <div>
      <el-button class="btn-order" :type=" inOrder ? 'danger' : 'primary'" @click.stop="processOrder(item)">
        {{ inOrder ? 'Удалить' : 'Заказать' }}
      </el-button>
    </div>
  </el-card>

  <el-dialog
    v-model="dialogVisible"
    :title="item.title"
    width="30%"
  >
    <img width="100%" :src="item.image" alt="">
    <span class="title">{{ item.title }}</span>
    <div class="price">{{ item.price }} &#8364;</div>
    <div class="description">{{ item.description }}</div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible.value = false">Отмена</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import {ElButton, ElCard, ElDialog} from 'element-plus'
import {defineEmits, onMounted, ref} from "vue"

const props = defineProps(['item'])
const dialogVisible = ref(false)
const inOrder = ref(false)
const emit = defineEmits(['changeOrder'])

function processOrder(el) {
  inOrder.value = !inOrder.value
  emit('changeOrder', [inOrder.value, el])
}

onMounted(() => {
  inOrder.value = props.item.inOrder
})
</script>

<style scoped>
.item {
  cursor: pointer;
  position: relative;
  padding: 18px 0 50px;
  height: 100%;
}

.el-dialog__body img {
  width: 100%;
}

.title {
  font-weight: bold;
  font-size: 22px;
}

.price {
  font-size: 18px;
  color: red;
}

.description {
  font-size: 14px;
  color: grey;
}

.btn-order {
  position: absolute;
  bottom: 20px;
  left: 20px;
}
</style>
