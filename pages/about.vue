<template>
  <section class="bg-[#f9fafb] text-[#2c3e50] mt-16 px-4 py-10">
    <div class="max-w-6xl mx-auto space-y-16">

      <!-- Title -->
      <div class="text-center">
        <h1 class="text-3xl md:text-4xl font-bold mb-4">{{ t('about.title') }}</h1>
        <p class="text-lg text-gray-600">{{ t('about.intro') }}</p>
      </div>

      <!-- Production Section -->
      <div class="flex flex-col md:flex-row items-center gap-10">
        <NuxtImg src="/offer2.jpg" alt="Production" class="w-full md:w-1/2 h-auto object-cover bg-gray-200" />
        <div class="md:w-1/2 space-y-4">
          <h2 class="text-2xl font-semibold">{{ t('about.productionTitle') }}</h2>
          <p class="text-gray-700">{{ t('about.productionText') }}</p>
        </div>
      </div>

      <!-- Export Section -->
      <div class="flex flex-col-reverse md:flex-row items-center gap-10">
        <div class="md:w-1/2 space-y-4">
          <h2 class="text-2xl font-semibold">{{ t('about.exportTitle') }}</h2>
          <p class="text-gray-700">{{ t('about.exportText') }}</p>
        </div>
        <NuxtImg src="/offer4.jpg" alt="Export" class="w-full md:w-1/2 h-auto object-cover bg-gray-200" />
      </div>

      <!-- Offer Section -->
      <div class="flex flex-col md:flex-row items-center gap-10">
        <NuxtImg src="/offer3.jpg" alt="Products" class="w-full md:w-1/2 h-auto object-cover bg-gray-200" />
        <div class="md:w-1/2 space-y-4">
          <h2 class="text-2xl font-semibold">{{ t('about.offerTitle') }}</h2>
          <p class="text-gray-700">{{ t('about.offerText') }}</p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

import { useHead } from '#imports'

useHead({
  title: 'Sorgo Trade | About',
  meta: [
    {
      name: 'description',
      content: 'Компания Sorgo Trade занимается производством экологически чистых веников и метел из сорго и экспортирует продукцию в страны СНГ и Европы.',
    },
    {
      name: 'keywords',
      content: 'веник, метла, сорго, экологически чистый продукт, производство, экспорт, Sorgo Trade, Узбекистан, веник ручной работы, бытовая продукция',
    }
  ]
})
</script>
