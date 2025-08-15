<template>
  <section class="bg-[#28354E] text-white py-16">
    <div class="max-w-7xl mx-auto px-4">
      <h2 class="text-2xl md:text-3xl font-bold text-center mb-16">
        {{ t("offerSection.title") }}
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <!-- Card 1 -->
        <div class="flex flex-col items-center text-center gap-5">
          <NuxtImg
            src="/offer1.jpg"
            alt="Выращивание Сорго"
            class="w-full aspect-square object-cover rounded-lg"
          />
          <p class="text-base md:text-lg font-medium leading-relaxed">
            {{ t("offerSection.offer1") }}
          </p>
        </div>

        <!-- Card 2 -->
        <div class="flex flex-col items-center text-center gap-5">
          <NuxtImg
            src="/offer2.jpg"
            alt="Поставка Сырья"
            class="w-full aspect-square object-cover rounded-lg"
          />
          <p class="text-base md:text-lg font-medium leading-relaxed">
            {{ t("offerSection.offer2") }}
          </p>
        </div>

        <!-- Card 3 -->
        <div class="flex flex-col items-center text-center gap-5">
          <NuxtImg
            src="/offer3.jpg"
            alt="Большой Выбор"
            class="w-full aspect-square object-cover rounded-lg"
          />
          <p class="text-base md:text-lg font-medium leading-relaxed">
            {{ t("offerSection.offer3") }}
          </p>
        </div>

        <!-- Card 4 -->
        <div class="flex flex-col items-center text-center gap-5">
          <NuxtImg
            src="/offer4.jpg"
            alt="Экспорт в Страны СНГ"
            class="w-full aspect-square object-cover rounded-lg"
          />
          <p class="text-base md:text-lg font-medium leading-relaxed">
            {{ t("offerSection.offer4") }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>



<script setup>
import { useI18n } from "vue-i18n"
const { t } = useI18n();
</script>
