<template>
  <el-button class="btn" type="primary" @click="dialogVisible = true">Добавить товар</el-button>
  <el-dialog
    v-model="dialogVisible"
    :title="'Добавление товара'"
    width="30%"
  >
    <el-form-item label="Наименование товара">
      <Field name="title" id="title" placeholder="Наименование" v-model="goods.title" rules="required"></Field>
      <ErrorMessage name="title" class="error"/>
    </el-form-item>
    <el-form-item label="Описание">
      <Field name="description" id="description" placeholder="Описание" v-model="goods.description" rules="required"></Field>
      <ErrorMessage name="description" class="error"/>
    </el-form-item>
    <el-form-item label="Цена">
      <Field name="price" id="price" placeholder="Цена" type="number" v-model="goods.price" rules="required"></Field>
      <ErrorMessage name="price" class="error"/>
    </el-form-item>

    <el-button class="btn-add" type="success" @click="addToList">Добавить</el-button>
  </el-dialog>
</template>

<script setup>

import {defineEmits, ref} from "vue";
import {ErrorMessage, Field} from 'vee-validate';

const dialogVisible = ref(false)
const goods = ref({})
const emit = defineEmits(['createGood'])

function addToList(){
  emit('createGood', goods.value)
}
</script>

<style scoped>
  .btn{
    float: right;
    margin-bottom: 10px;
  }

  .btn-add{
    margin-top: 20px;
  }
</style>
