<template>
  <div class="header-block">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo header"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
    >
      <el-menu-item index="0">
        <img alt="Vue logo" class="logo" src="../assets/logo.svg" width="125" height="125"/>
      </el-menu-item>
      <el-menu-item index="1"><router-link :to="{name: 'Main'}">Главная</router-link></el-menu-item>
      <el-menu-item index="2"><router-link :to="{name: 'Catalog'}">Каталог товаров</router-link></el-menu-item>
      <el-menu-item index="3" v-if="!store.state.isAuth"><router-link :to="{name: 'Login'}">Вход</router-link></el-menu-item>
      <el-menu-item v-if="store.state.isAuth">{{ store.state.fio }}<a @click.prevent="logout" href="">Выйти</a></el-menu-item>
      <el-menu-item index="4"><router-link :to="{name: 'Cards'}" class="card-item"><el-icon class="card-item__img"><ShoppingBag /></el-icon></router-link></el-menu-item>
    </el-menu>
  </div>
</template>

<script setup>
  import {ref} from "vue";
  import {useStore} from "vuex";

  const activeIndex = ref('1')
  const store = useStore()
  function handleSelect(){}

  function logout(){
    store.dispatch('logout')
  }
</script>



<style scoped lang="scss">
.header-block{
  height: 55px;
  position: absolute;
  top: 10px;
  display: inline-block;

  .header {
    display: inline-block;
    width: 100%;
  }
  .logo{
    float: left;
    height: 55px;
  }
  .el-menu{
    display: flex;
    align-items: center;
    &-item{
      display: inline-block;
      position: relative;
      margin-right: 20px;
      a{
        padding: 10px 15px;
      }
    }
  }
  .card-item{
    display: flex;
    &__img {
      font-size: 30px;
    }
  }
}

</style>