<template>
  <NuxtLayout>
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>

<script setup>
import { useCartStore } from '@/stores/cart'
import { watch, onMounted } from 'vue'

const cartStore = useCartStore()

onMounted(() => {
  cartStore.loadFromLocalStorage()
})

watch(
  () => cartStore.items,
  () => {
    cartStore.saveToLocalStorage()
  },
  { deep: true }
)
</script>