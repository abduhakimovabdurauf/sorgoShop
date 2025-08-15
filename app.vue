<template>
  <NuxtLayout>
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>

<script setup>
import { useCartStore } from '@/stores/cart'
import { watch, onMounted } from 'vue'
// import { useProductStore } from './stores/products.js';
const cartStore = useCartStore()

// const productStore = useProductStore();
// onMounted(async () => {
//   cartStore.loadFromLocalStorage?.()

//   if (!productStore.products.length) {
//     await productStore.fetchProducts()
//   }
// })


watch(
  () => cartStore.items,
  () => {
    cartStore.saveToLocalStorage()
  },
  { deep: true }
)
</script>