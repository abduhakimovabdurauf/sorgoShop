<template>
  <div class="container mx-auto p-4 md:p-8 lg:p-12 mt-16">
    <div
      v-if="product"
      class="flex flex-col-reverse lg:flex-row bg-white overflow-hidden max-w-6xl mx-auto"
    >
      <div
        class="w-full lg:w-1/2 p-6 md:p-8 lg:p-10 bg-[#2c3e50] flex flex-col justify-between"
      >
        <div>
          <div class="relative inline-block mb-6 pr-10">
            <div
              class="bg-[#2c3e50] py-4 text-white font-semibold uppercase tracking-wider text-xl md:text-2xl"
            >
              {{ product?.name[locale] }}
            </div>
          </div>
          <p class="text-white text-base md:text-xl leading-relaxed mb-8">
            {{ product?.description[locale] }}
          </p>
        </div>
        <div
          class="flex flex-col sm:flex-row items-center justify-between mt-auto pt-6 border-t border-gray-200"
        >
          <div
            class="flex items-center rounded-md bg-white border border-gray-300 mb-4 sm:mb-0"
          >
            <button
              @click="decrease"
              class="p-2 w-10 text-center text-gray-700 hover:bg-gray-200 rounded-l-md focus:outline-none"
            >
              -
            </button>
            <input
              type="text"
              :value="quantity"
              class="w-12 text-center border-l border-r border-gray-300 py-2 focus:outline-none text-gray-800 text-base"
              readonly
            />
            <button
              @click="increase"
              class="p-2 w-10 text-center text-gray-700 hover:bg-gray-200 rounded-r-md focus:outline-none"
            >
              +
            </button>
          </div>
          <button
            @click="addToCart"
            class="bg-green-500 cursor-pointer hover:bg-green-600 text-white font-medium py-3 px-6 rounded-md transition duration-300 ease-in-out text-sm uppercase tracking-wide w-full sm:w-auto"
          >
            {{ $t("addToCart") }}
          </button>
        </div>
      </div>
      <div
        class="w-full lg:w-1/2 p-6 md:p-8 lg:p-10 flex items-center justify-center bg-gray-50"
      >
        <div
          class="w-full lg:w-1/2 p-6 md:p-8 lg:p-10 flex flex-col items-center justify-center bg-gray-50 gap-4"
        >
          <div v-if="product?.images?.length">
            <!-- Asosiy rasm -->
            <NuxtImg
              :src="product.images[0]"
              alt="Product Image"
              class="max-w-full h-auto mb-4"
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
          <div v-else class="text-gray-400">No image available</div>
        </div>
      </div>
    </div>

    <!-- <div class="text-2xl text-center mt-30" v-else>
      Mahsulot yuklanmoqda...
    </div> -->
  </div>

  <transition name="fade">
    <div
      v-if="showToast"
      class="fixed top-6 right-6 bg-green-600 text-white px-6 py-4 rounded-xl shadow-2xl z-50 text-base font-semibold flex items-center gap-3"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 13l4 4L19 7"
        />
      </svg>
      {{ $t("cart.added") }}
    </div>
  </transition>
</template>

<script setup>
import { useRoute } from "vue-router";
import { useProductStore } from "@/stores/products";
import { useCartStore } from "@/stores/cart";
import { useI18n } from "vue-i18n";
import { computed, ref, onMounted, watch } from "vue";
const showToast = ref(false);
const { locale } = useI18n();
const route = useRoute();
const { getProductById } = useProductStore();
const cartStore = useCartStore();
const product = computed(() => getProductById(Number(route.params.id)));
console.log(product.value);

const quantity = ref(1);
const increase = () => quantity.value++;
const decrease = () => {
  if (quantity.value > 1) quantity.value--;
};
const addToCart = () => {
  if (product.value) {
    cartStore.addToCart(product.value, quantity.value);
    showToast.value = true;
    setTimeout(() => {
      showToast.value = false;
    }, 3000);
  }
};

const mainImageIndex = ref(0);

const mainImage = computed(() => {
  return product.value?.images?.[mainImageIndex.value] || '/default-image.jpg';
});


watch(
  () => cartStore.items,
  () => {
    cartStore.saveToLocalStorage?.();
  },
  { deep: true }
);
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
