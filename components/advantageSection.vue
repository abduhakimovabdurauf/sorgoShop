<template>
  <div class="bg-gray-100 py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-xl sm:text-3xl font-bold text-center text-gray-800 mb-12">
        {{ t('advantagesSection.title') }}
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 justify-items-center mx-auto items-stretch max-w-[1200px]">
        <div class="flex items-center p-4 h-full w-full max-w-[300px]">
          <NuxtImg src="/quality.svg" alt="Высокое Качество" class="w-20 h-20 mr-4" />
          <div class="w-full">
            <p v-html="t('advantagesSection.advantage1')" class="text-[20px] font-semibold text-gray-700"></p>
          </div>
        </div>

        <div class="flex items-center p-4 h-full w-full max-w-[300px]">
          <NuxtImg src="/fast.svg" alt="Быстрое Оформление Заказа" class="w-20 h-20 mr-4" />
          <div class="w-full">
            <p v-html="t('advantagesSection.advantage2')" class="text-[20px] font-semibold text-gray-700"></p>
          </div>
        </div>

        <div class="flex items-center p-4 h-full w-full max-w-[300px]">
          <NuxtImg src="/products.svg" alt="Более 20 Видов Продукции" class="w-20 h-20 mr-4" />
          <div class="w-full">
            <p v-html="t('advantagesSection.advantage3')" class="text-[20px] font-semibold text-gray-700"></p>
          </div>
        </div>

        <div class="flex items-center p-4 h-full w-full max-w-[300px]">
          <NuxtImg src="/design.svg" alt="Индивидуальный Дизайн" class="w-20 h-20 mr-4" />
          <div class="w-full">
            <p v-html="t('advantagesSection.advantage4')" class="text-[20px] font-semibold text-gray-700"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { useI18n } from "vue-i18n"
const { t } = useI18n();

</script>