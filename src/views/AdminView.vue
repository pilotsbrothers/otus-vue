<template>
  <MainLayout>
    <template #main>
      <Form ref="form" v-if="!store.state.user.isAuth">
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

      <el-form-item v-if="store.state.user.isAuth === true">
        <el-button type="primary" @click="logoutUser" class="btn-logout">Выйти</el-button>
      </el-form-item>

      <create-goods v-if="store.state.user.isAuth === true" @create-good="createGood"></create-goods>
    </template>
  </MainLayout>
</template>

<script setup>
import MainLayout from "../layout/MainLayout.vue";
import CreateGoods from '../components/Forms/CreateGood.vue'
import {onMounted, ref} from "vue";
import {useRouter} from "vue-router/dist/vue-router";
import {defineRule, ErrorMessage, Field, Form} from 'vee-validate';
import {useStore} from "vuex";

const login = ref(null)
const password = ref(null)
const router = useRouter()
const store = useStore()

defineRule('required', value => {
  if (!value || !value.length) {
    return 'Поле обязательно для заполнения';
  }
  return true;
});

onMounted(() => {
  store.dispatch('getItems')
})

function loginUser(){
  if(login.value === 'admin' && password.value === 'admin'){
    store.dispatch('login')
  }
}
function logoutUser(){
  store.dispatch('logout')
  router.push({name: 'Main'})
}

function createGood(el){
  let items = store.state.app.items
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
  store.dispatch('addItem', el)
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