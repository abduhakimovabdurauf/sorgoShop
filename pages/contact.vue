<template>
  <div class="bg-[#f9fafb] py-12 px-4 mt-16">
    <div class="max-w-4xl mx-auto bg-white border border-gray-300">
      <h2 class="text-2xl md:text-3xl font-bold text-[#2c3e50] px-6 py-6 border-b">
        {{ t('contact.title') }}
      </h2>

      <form @submit.prevent="handleSubmit" class="p-6 space-y-6">
        <div class="flex flex-col md:flex-row gap-6">
          <div class="w-full">
            <label class="block text-[#2c3e50] mb-2">{{ t('contact.name') }}</label>
            <input
              v-model="form.name"
              type="text"
              required
              class="w-full border border-gray-300 px-4 py-2 focus:outline-none"
            />
          </div>
          <div class="w-full">
            <label class="block text-[#2c3e50] mb-2">{{ t('contact.email') }}</label>
            <input
              v-model="form.email"
              type="email"
              required
              class="w-full border border-gray-300 px-4 py-2 focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label class="block text-[#2c3e50] mb-2">{{ t('contact.message') }}</label>
          <textarea
            v-model="form.message"
            required
            rows="5"
            class="w-full border border-gray-300 px-4 py-2 focus:outline-none"
          ></textarea>
        </div>

        <button
          type="submit"
          :disabled="loading"
          class="bg-[#2c3e50] cursor-pointer text-white px-6 py-3 hover:bg-[#1a252f] transition w-full sm:w-auto"
        >
          {{ loading ? t('contact.sending') : t('contact.send') }}
        </button>

        <p v-if="success" class="text-green-600">{{ t('contact.success') }}</p>
        <p v-if="error" class="text-red-500">{{ t('contact.error') }}</p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const form = ref({
  name: '',
  email: '',
  message: ''
})

const loading = ref(false)
const success = ref(false)
const error = ref(false)

const handleSubmit = async () => {
  loading.value = true
  success.value = false
  error.value = false

  try {
    const message = `📬 *Yangi xabar!*\n\n👤 Ism: ${form.value.name}\n📧 Email: ${form.value.email}\n💬 Xabar: ${form.value.message}`
    await fetch('/api/telegram', {
      method: 'POST',
      body: JSON.stringify({ text: message }),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    success.value = true
    form.value = { name: '', email: '', message: '' }
  } catch (e) {
    error.value = true
  } finally {
    loading.value = false
  }
}

import { useHead } from '#imports'

useHead({
  title: 'Sorgo Trade | Contact',
  meta: [
    {
      name: 'description',
      content: 'Свяжитесь с компанией Sorgo Trade для получения информации, предложений или сотрудничества. Мы всегда рады помочь вам.',
    },
    {
      name: 'keywords',
      content: 'контакт, форма, написать, отправить сообщение, Sorgo Trade, Узбекистан, веник, экологическая продукция'
    }
  ]
})

</script>
