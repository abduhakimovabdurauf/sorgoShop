<template>
  <ClientOnly>
    <div class="container mx-auto py-8 px-4">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div v-for="product in translatedProducts" :key="product.id" class="bg-white overflow-hidden gap-10">
          <NuxtLink :to="`/slug/${product.id}`">
            <div class="relative h-56 flex items-center border border-gray-500 justify-center p-4">
              <NuxtImg
                :src="product.images[0]"
                :alt="product.name[locale]"
                class="max-h-full max-w-full object-contain"
              />
              <div v-if="!product.images" class="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400 text-sm">
                No Image
              </div>
            </div>
            <div class="p-4 bg-gray-50 mt-3 h-30">
              <h3 class="text-md font-semibold text-gray-800 mb-1 leading-tight">
                {{ product.name[locale] }}
              </h3>
              <p class="text-gray-600 text-sm leading-snug">
                {{ product.description[locale] }}
              </p>
            </div>
          </NuxtLink>
          
        </div>
      </div>

      <div class="flex justify-center mt-8 gap-4">
        <NuxtLink to="/products" class="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded transition">
          {{t('vatchAll')}}
        </NuxtLink>

        <button
          @click="downloadPDF"
          class="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition"
        >
          {{ t('downloadCatalog') }}
        </button>
      </div>

    </div>
  </ClientOnly>
  
</template>

<script setup>
import { useProductStore } from '@/stores/products';

const productStore = useProductStore();
const { t,locale } = useI18n()


const downloadPDF = () => {
  const link = document.createElement('a');
  link.href = '/catalog.pdf';
  link.download = 'catalog.pdf';
  link.click();
}

const translatedProducts = computed(() =>
  productStore.products.slice(0,12).map((product) => ({
    ...product,
    name: product.name[locale.value],
    description: product.description[locale.value]
  }))
)
</script>

<style scoped>

</style>