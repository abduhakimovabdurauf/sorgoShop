<template>
  <ClientOnly>
    <div v-if="filteredProducts" class="container mx-auto py-8 px-4 mt-24">
      <!-- Category links -->
      <div class="flex gap-4 mb-6 mx-auto overflow-x-auto flex-nowrap">
        <button
          v-for="cat in categories"
          :key="cat.value"
          @click="selectedCategory = cat.value"
          :class="[
            'px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base rounded-md border transition whitespace-nowrap shrink-0',
            selectedCategory === cat.value
              ? 'bg-gray-800 text-white'
              : 'bg-white text-gray-600 hover:text-black border-gray-300',
          ]"
        >
          {{ cat.label }}
        </button>
      </div>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        <div
          v-for="product in filteredProducts"
          :key="product.id"
          class="bg-white overflow-hidden gap-10"
        >
          <NuxtLink :to="`/slug/${product.id}`">
            <div
              class="relative h-56 flex items-center border border-gray-500 justify-center p-4"
            >
              <div class="flex flex-col items-center">
                <!-- Asosiy rasm -->
                <NuxtImg
                  :src="mainImage"
                  :alt="product.name"
                  class="max-h-96 max-w-full object-contain mb-4"
                />

                <!-- Thumbnaillar -->
                <div class="flex gap-2 overflow-x-auto">
                  <button
                    v-for="(img, index) in product.images"
                    :key="index"
                    @click="mainImageIndex = index"
                    class="border rounded p-1"
                  >
                    <NuxtImg
                      :src="img"
                      alt="Thumbnail"
                      class="w-16 h-16 object-cover"
                    />
                  </button>
                </div>
              </div>

              <div
                v-if="!product.images"
                class="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400 text-sm"
              >
                No Image
              </div>
            </div>
            <div class="p-4 bg-gray-50 mt-3 h-30">
              <h3
                class="text-md font-semibold text-gray-800 mb-1 leading-tight"
              >
                {{ product.name }}
              </h3>
              <p class="text-gray-600 text-sm leading-snug">
                {{ product.description }}
              </p>
            </div>
          </NuxtLink>
        </div>
      </div>
      <div class="flex justify-center mt-8 gap-4">
        <button
          @click="downloadPDF"
          class="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition"
        >
          {{ t("downloadCatalog") }}
        </button>
      </div>
    </div>
    <div v-else class="text-center text-gray-500 mt-8">
      {{ t("vatchAll") }}
    </div>
  </ClientOnly>
</template>

<script setup>
import { useProductStore } from "@/stores/products";
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";

const productStore = useProductStore();
const { t, locale } = useI18n();

const selectedCategory = ref("all");
const downloadPDF = () => {
  const link = document.createElement("a");
  link.href = "/catalog.pdf";
  link.download = "catalog.pdf";
  link.click();
};

const categories = [
  { label: "All", value: "all" },
  { label: "Standard", value: "standart" },
  { label: "Classic", value: "classic" },
  { label: "Lux", value: "lux" },
];

const filteredProducts = computed(() => {
  const translated = productStore.products.map((product) => ({
    ...product,
    name: product.name[locale.value],
    description: product.description[locale.value],
  }));

  if (selectedCategory.value === "all") return translated;
  return translated.filter((p) => p.category === selectedCategory.value);
});
const mainImageIndex = ref(0);
const mainImage = computed(() => product.value?.images?.[mainImageIndex.value] || '/default-image.jpg');

import { useHead } from "#imports";

useHead({
  title: "Sorgo Trade | Products",
  meta: [
    {
      name: "description",
      content:
        "Ознакомьтесь с ассортиментом экологически чистых веников и метел от Sorgo Trade. Доступны категории: стандарт, классик и люкс.",
    },
    {
      name: "keywords",
      content:
        "sorgo, веник, метла, продукция, каталог, стандарт, классик, люкс, экологически чистые изделия, Узбекистан, Sorgo Trade",
    },
  ],
});
</script>
