<template>
  <h2>Форма добавления товара</h2>
  <Form ref="form" @submit="addToList">
    <el-form-item label="Наименование товара">
      <Field name="title" id="title" placeholder="Наименование" v-model="goods.title" rules="required"></Field>
      <ErrorMessage name="title" class="error"/>
    </el-form-item>
    <el-form-item label="Описание">
      <Field name="description" id="description" placeholder="Описание" v-model="goods.description" rules="required"></Field>
      <ErrorMessage name="description" class="error"/>
    </el-form-item>
    <el-form-item label="Цена">
      <Field name="price" id="price" placeholder="Цена" type="number" min="0" v-model="goods.price" rules="validateMin"></Field>
      <ErrorMessage name="price" class="error"/>
    </el-form-item>

    <button class="btn-add" type="submit">Добавить</button>
  </Form>
</template>

<script setup>

import {defineEmits, ref} from "vue";
import {defineRule, ErrorMessage, Field, Form, useForm} from 'vee-validate';

const goods = ref({})
const emit = defineEmits(['createGood'])
const { resetForm } = useForm();

defineRule('required', value => {
  if (!value || !value.length) {
    return 'Поле обязательно для заполнения';
  }
  return true;
});
defineRule('validateMin', value => {
  if (value < 0) {
    return 'Поле должно быть положительным числом';
  }
  return true;
});

function addToList(){
  emit('createGood', goods.value)
  resetForm();
}
</script>

<style scoped>
  .btn{
    float: left;
    margin-bottom: 10px;
    position: relative;
  }

  .btn-add{
    margin-top: 20px;
  }
</style>
