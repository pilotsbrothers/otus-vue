<template>
  <section class="order-form">
    <Form :model="form" :inline="true" label-width="120px" @submit="onSubmit">
      <h3>Форма заказа</h3>
      <el-form-item label="ФИО:">
        <Field name="fio" id="fio" placeholder="ФИО" v-model="form.fio" rules="required"></Field>
        <ErrorMessage name="fio" class="error"/>
      </el-form-item>
      <el-form-item label="Email:">
        <Field name="email" id="email" type="email" placeholder="Email" v-model="form.email" rules="required"></Field>
        <ErrorMessage name="email" class="error"/>
      </el-form-item>
      <el-form-item>
        <el-checkbox name="isAgree" v-model="form.isAgree" label="Согласие на обработку персональных данных"
                     size="large"></el-checkbox>
      </el-form-item>
      <el-row>
        <el-col :span="24">
          <b>Количество товаров:</b> {{ totalCount }}
        </el-col>
        <el-col :span="24">
          <b>Сумма заказа:</b> {{ totalPrice }}
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <button>Отправить заказ</button>
        </el-col>
      </el-row>
    </Form>
  </section>
</template>

<script setup>
import {computed, reactive} from "vue";
import {defineRule, ErrorMessage, Field, Form} from 'vee-validate';
import axios from "axios";
import { ElNotification } from 'element-plus'
import {useStore} from "vuex";

const store = useStore()
const totalPrice = computed(() => store.getters.totalPrice )
const totalCount = computed(() => store.getters.totalCount )
const form = reactive({
  fio: '',
  isAgree: false,
  email: ''
})

defineRule('required', value => {
  if (!value || !value.length) {
    return 'Поле обязательно для заполнения';
  }
  return true;
});

const success = () => {
  ElNotification({
    title: 'Заказ',
    message: 'Успешно отправлен',
    type: 'success',
  })
}

const onSubmit = () => {
  store.dispatch('saveUserData', {'fio': form.fio, 'email': form.email})
  axios.post(
    'https://httpbin.org/post',
    {
      data: form
    }
  ).then(() => {
    success()
  })
}
</script>

<style scoped>
.order-form {
  margin: 20px 0;
}

input {
  width: 100%;
  margin-bottom: 5px;
  height: 25px;
  padding: 15px 10px;
}

b {
  font-weight: bold;
}

.error {
  color: red
}
</style>
