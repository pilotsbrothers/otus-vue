<template>
  <MainLayout>
    <template #main>
      <Form ref="form" v-if="!isAuth">
        <el-form-item label="Логин">
          <Field name="login" id="login" v-model="login" placeholder="" rules="required"></Field>
          <ErrorMessage name="login" class="error"/>
        </el-form-item>
        <el-form-item label="Пароль">
          <Field name="passwd" id="passwd" v-model="password" placeholder="" rules="required"></Field>
          <ErrorMessage name="passwd" class="error"/>
        </el-form-item>
        <el-form-item>
          <button type="submit" @click="loginUser" class="btn-login btn-primary">Войти</button>
        </el-form-item>
      </Form>

      <el-form-item v-if="isAuth === true">
        <el-button type="primary" @click="logoutUser" class="btn-logout">Выйти</el-button>
      </el-form-item>

      <create-goods v-if="isAuth === true" @create-good="createGood"></create-goods>
    </template>
  </MainLayout>
</template>

<script setup>
import MainLayout from "../layout/MainLayout.vue";
import CreateGoods from '../components/Forms/CreateGood.vue'
import {onMounted, ref} from "vue";
import {useRouter} from "vue-router/dist/vue-router";
import {defineRule, ErrorMessage, Field, Form} from 'vee-validate';

const login = ref(null)
const password = ref(null)
const isAuth = ref(false)
const router = useRouter()

defineRule('required', value => {
  if (!value || !value.length) {
    return 'Поле обязательно для заполнения';
  }
  return true;
});

onMounted(() => {
  isAuth.value = localStorage.getItem('auth') === 'true'
})

function loginUser(){
  if(login.value === 'admin' && password.value === 'admin'){
    isAuth.value = true
    localStorage.setItem('auth', 'true')
  }
}
function logoutUser(){
  isAuth.value = false
  localStorage.setItem('auth', 'false')
  router.push({name: 'Main'})
}

function createGood(el){
  let items = JSON.parse(localStorage.getItem('items'))
  let maxId = 0
  if(items !== null){
    items.forEach((item) => {
      if(maxId <= item.id) maxId = item.id
    })
    el.id = maxId + 1
  }else{
    items = []
    el.id = 1
  }
   items.push(el)
   localStorage.setItem('items', JSON.stringify(items))
}

</script>

<style scoped>
  .btn-login{
    margin-top: 10px;
  }
  .btn-logout{
    margin-bottom: 20px;
  }
</style>