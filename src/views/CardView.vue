<template>
  <MainLayout>
    <template #main>
      <ul>
        <li v-for="element in store.state.card" v-bind:key="element">
          <router-link :to="{ 'name': 'CatalogItem', params: { id: element.id } }">{{element.title}}</router-link>
        </li>
      </ul>
      <payment-form></payment-form>
    </template>
  </MainLayout>
</template>

<script setup>
import PaymentForm from "../components/Forms/PaymentForm.vue";
import MainLayout from "../layout/MainLayout.vue";
import {useStore} from "vuex";

const store = useStore()
</script>