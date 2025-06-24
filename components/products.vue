<template>
  <div class="container mx-auto py-8 px-4">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <div v-for="product in products" :key="product.id" class="bg-white overflow-hidden gap-10">
        <div class="relative h-56 flex items-center border border-gray-500 justify-center p-4">
          <NuxtImg
            :src="product.imagePath"
            :alt="product.name.en"
            class="max-h-full max-w-full object-contain"
          />
          <div v-if="!product.imagePath" class="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400 text-sm">
            No Image
          </div>
        </div>
        <div class="p-4 bg-gray-50 mt-3 h-30">
          <h3 class="text-md font-semibold text-gray-800 mb-1 leading-tight">
            {{ product.name.en }}
          </h3>
          <p class="text-gray-600 text-sm leading-snug">
            {{ product.description.en }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useProductStore } from '@/stores/products';

const productStore = useProductStore();
const products = productStore.products;
</script>

<style scoped>

</style>