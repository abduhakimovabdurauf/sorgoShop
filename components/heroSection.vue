<template>
  <ClientOnly>
    <div
      class="min-h-screen bg-cover bg-center bg-no-repeat flex items-start justify-start md:px-24 pt-12"
      :style="{ backgroundImage: imageUrl ? `url(${imageUrl})` : '' }"
    >
      <div class="max-w-lg flex flex-col md:flex-row">
        <!-- Matn qismi -->
        <div class="md:w-full p-4 text-left">
          <h1 class="text-xl sm:text-2xl lg:text-3xl text-gray-800 mb-4 leading-tight">
            {{ t('heroSection.title') }}
          </h1>
          <p class="text-base sm:text-lg text-gray-700 leading-relaxed">
            {{ t('heroSection.text') }}
          </p>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>


<script setup>
import { useImage } from '#imports'
import { ClientOnly } from '#components'
const { t } = useI18n()

const imageUrl = useImage()('/background.jpg')
</script>
