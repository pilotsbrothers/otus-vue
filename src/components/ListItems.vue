<template>
  <section>
    <el-row>
      <el-col class="item-block" :span="6" v-for="item in goods" :key="item">
        <item-element :item="item" @change-order="changeOrder"></item-element>
      </el-col>
    </el-row>
  </section>
  <payment-form :count="count" :price="price"></payment-form>
</template>

<script setup>
import {computed, ref} from "vue";
import {ElCol, ElRow} from 'element-plus'
import ItemElement from "./ItemElement.vue";
import PaymentForm from "./Forms/PaymentForm.vue";


const props = defineProps(['data', 'search'])

const count = ref(0)
const price = computed(() => {
  let price = 0;
  goods.value.forEach((item) => {
    if (item.inOrder) {
      price += item.price
    }
  })
  return price
})

const goods = computed(() => {
    return props.data.filter((el) => {
      return el.title.toLowerCase().includes(props.search.toLowerCase())
    })
  },
  () => {
  })


function changeOrder(data) {
  goods.value.forEach((item) => {
    if (item.id === data[1].id) {
      data[0] ? count.value++ : count.value--
      item.inOrder = data[0]
    }
  })
}
</script>

<style scoped>
.item-block {
  padding: 20px;
}
</style>
