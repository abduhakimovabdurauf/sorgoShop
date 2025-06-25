<template>
  <div class="bg-[#f9fafb] py-10 px-4 mt-16">
    <div class="max-w-6xl mx-auto bg-white border border-gray-200">
      <h2 class="text-2xl md:text-3xl font-bold text-[#2c3e50] px-6 py-6 border-b">
        🛒 {{ $t('cart.title') }}
      </h2>

      <div v-if="cartItems.length > 0" class="divide-y">
        <div
          v-for="item in cartItems"
          :key="item.id"
          class="flex flex-col sm:flex-row justify-between items-center px-6 py-6 gap-4"
        >
          <div class="flex items-center gap-4 w-full sm:w-1/2">
            <NuxtImg
              :src="item.product.imagePath"
              :alt="item.product.name[locale]"
              class="w-24 h-24 object-contain bg-gray-100"
            />
            <div>
              <h3 class="text-[#2c3e50] font-semibold text-lg">{{ item.product.name[locale] }}</h3>
              <p class="text-gray-600 text-sm">{{ item.product.description[locale] }}</p>
            </div>
          </div>

          <div class="flex items-center gap-3">
            <button @click="decrease(item)" class="px-3 py-1 bg-gray-200 text-[#2c3e50]">-</button>
            <span class="font-medium">{{ item.quantity }}</span>
            <button @click="increase(item)" class="px-3 py-1 bg-gray-200 text-[#2c3e50]">+</button>
          </div>

          <button @click="remove(item.id)" class="text-red-500 text-sm hover:underline">
            {{ $t('cart.remove') }}
          </button>
        </div>
      </div>

      <div v-else class="p-6 text-center text-gray-500 italic">
        {{ $t('cart.emptyLine1') }} <br />
        <NuxtLink
            to="/products"
            class="text-blue-600 hover:text-blue-800 underline font-medium transition"
            >
            {{ $t('cart.emptyLine2') }}
        </NuxtLink>

      </div>

      <div
        v-if="cartItems.length > 0"
        class="px-6 py-6 border-t bg-[#f9fafb] flex flex-col sm:flex-row justify-between items-center gap-4"
      >
        <p class="text-lg font-semibold text-[#2c3e50]">
          {{ $t('cart.totalItems') }}: {{ totalItems }}
        </p>
        <button class="bg-[#2c3e50] cursor-pointer text-white px-6 py-3 hover:bg-[#1a252f] transition" @click="checkout">
          {{ $t('cart.checkout') }}
        </button>
      </div>
    </div>
  </div>
</template>


<script setup>
import { useCartStore } from '@/stores/cart'
import { useI18n } from 'vue-i18n'
import { onMounted, watch, computed } from 'vue'

const cartStore = useCartStore()
const { locale } = useI18n()

const cartItems = computed(() => cartStore.items)
const totalItems = computed(() =>
  cartItems.value.reduce((sum, item) => sum + item.quantity, 0)
)

const increase = (item) => {
  item.quantity++
  cartStore.saveToLocalStorage()
}
const decrease = (item) => {
  if (item.quantity > 1) {
    item.quantity--
    cartStore.saveToLocalStorage()
  }
}
const remove = (id) => {
  cartStore.removeFromCart(id)
  cartStore.saveToLocalStorage()
}

onMounted(() => {
  cartStore.loadFromLocalStorage?.()
})

watch(
  () => cartStore.items,
  () => {
    cartStore.saveToLocalStorage?.()
  },
  { deep: true }
)

const checkout = async () => {
  const messageLines = [
    '🛒 *Yangi buyurtma!*',
    '',
    ...cartItems.value.map((item, i) => {
      return `${i + 1}. ${item.product.name.uz} — *${item.quantity}* dona`;
    }),
    '',
    `📦 Umumiy soni: *${totalItems.value}*`
  ]

  const text = messageLines.join('\n')

  try {
    await fetch('/api/telegram', {
      method: 'POST',
      body: JSON.stringify({ text }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    alert('Buyurtma muvoffaqiyatli yuborildi!')
    cartStore.clearCart()
    cartStore.saveToLocalStorage()
  } catch (e) {
    alert('Xatolik yuz berdi. Iltimos, keyinroq urinib ko‘ring.')
  }
}


import { useHead } from '#imports'

useHead({
  title: 'Sorgo Trade | Cart',
  meta: [
    {
      name: 'description',
      content: 'Просмотрите товары, добавленные в корзину. Управляйте количеством, удаляйте позиции и переходите к оформлению заказа с продукцией от Sorgo Trade.',
    },
    {
      name: 'keywords',
      content: 'корзина, товары, Sorgo Trade, купить веник, метла из сорго, оформление заказа, экологически чистые товары, Узбекистан'
    }
  ]
})

</script>
