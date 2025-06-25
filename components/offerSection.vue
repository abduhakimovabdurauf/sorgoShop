<template>
  <div class="bg-[#28354E] text-white py-12">
    <div class="container mx-auto px-4">
      <h2 class="text-2xl font-bold text-center mb-12">{{ t("offerSection.title") }}</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-32">
        <div class="flex flex-col items-center p-4">
          <NuxtImg src="/offer1.jpg" alt="Выращивание Сорго" class="w-full h-106 object-cover mb-4"/>
          <p class="text-lg font-semibold text-center">{{ t("offerSection.offer1") }}</p>
        </div>

        <div class="flex flex-col items-center p-4">
          <NuxtImg src="/offer2.jpg" alt="Поставка Сырья" class="w-full h-106 object-cover mb-4"/>
          <p class="text-lg font-semibold text-center">{{ t("offerSection.offer2") }}</p>
        </div>

        <div class="flex flex-col items-center p-4">
          <NuxtImg src="/offer3.jpg" alt="Большой Выбор" class="w-full h-106 object-cover mb-4"/>
          <p class="text-lg font-semibold text-center">{{ t("offerSection.offer3") }}</p>
        </div>

        <div class="flex flex-col items-center p-4">
          <NuxtImg src="/offer4.jpg" alt="Экспорт в Страны СНГ" class="w-full h-106 object-cover mb-4"/>
          <p class="text-lg font-semibold text-center">{{ t("offerSection.offer4") }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n"
const { t } = useI18n();

</script>