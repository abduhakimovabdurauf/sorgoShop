<template>
  <footer class="bg-[#24304a] text-[#f4da7b] px-6 py-10 md:px-16">
    <div class="max-w-12xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
      <div class="space-y-4">
        <div class="flex items-center gap-2">
          <NuxtImg src="/logo.png" alt="Sorgo Logo" class="w-32 h-10" />
        </div>
        <div class="flex items-center gap-2 text-white">
          <i class="bx bxl-whatsapp text-lg"></i>
          <span>+998 (90) 907-13-00</span>
        </div>
        <div class="flex items-center gap-2 text-white">
          <i class="bx bx-envelope text-lg"></i>
          <div class="flex flex-col">
            <span>ahmadaxonov@gmail.ru</span>
            <span>sorgotrade@gmail.com</span>
          </div>
        </div>
        <div class="flex items-center gap-2 text-white">
          <i class="bx bx-globe text-lg"></i>
          <span>verni.uz</span>
        </div>
        <div class="flex items-center gap-2 text-white">
          <i class="bx bx-map text-lg"></i>
          <span>{{ t('footer.address') }}</span>
        </div>
        <div class="flex gap-3 pt-2 text-white text-xl">
          <i class="bx bxl-instagram"></i>
          <i class="bx bxl-facebook"></i>
        </div>
      </div>

      <div class="space-y-2 text-white">
        <div>{{ t('footer.menu.home') }}</div>
        <div>{{ t('footer.menu.product') }}</div>
        <div>{{ t('footer.menu.about') }}</div>
        <div>{{ t('footer.menu.contact') }}</div>
      </div>

      <div class="space-y-2 text-white">
        <div>{{ t('footer.links.faq') }}</div>
        <div>{{ t('footer.links.shipping') }}</div>
        <div>{{ t('footer.links.wholesale') }}</div>
        <div>{{ t('footer.links.terms') }}</div>
      </div>

      <div class="space-y-4">
        <p class="text-white">{{ t('footer.contactTitle') }}</p>
        <form class="flex gap-2" @submit.prevent="sendMessage">
          <input
            v-model="email"
            type="email"
            :placeholder="t('footer.emailPlaceholder')"
            class="px-3 py-2 text-white border border-white w-full max-w-xs focus:outline-none"
            required
          />
          <button
            type="submit"
            :disabled="loading"
            class="bg-[#a8e66f] text-black px-4 hover:bg-lime-400 transition"
          >
            {{ loading ? '...' : t('footer.send') }}
          </button>
        </form>
        <p v-if="success" class="text-green-400 text-sm">✅ {{ t('footer.sentSuccess') }}</p>
        <p v-if="error" class="text-red-400 text-sm">❌ {{ error }}</p>
      </div>
    </div>
  </footer>
</template>


<script setup>
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'

const { t } = useI18n()

const email = ref('')
const success = ref(false)
const loading = ref(false)
const error = ref('')

const sendMessage = async () => {
  if (!email.value) return

  loading.value = true
  error.value = ''
  try {
    const res = await $fetch('/api/telegram', {
      method: 'POST',
      body: { text: `📧 Yangi Xabar: ${email.value}` },
    })
    success.value = true
    email.value = ''
  } catch (err) {
    error.value = 'Xabar yuborishda xatolik yuz berdi'
  } finally {
    loading.value = false
  }
}
</script>