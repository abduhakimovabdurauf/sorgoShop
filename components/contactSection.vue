<template>
  <section id="contact" class="text-black py-16">
    <div class="max-w-5xl mx-auto px-6">
      <h2 class="text-4xl font-bold mb-10 border-b border-gray-300 pb-4">
        {{ $t('contact.title') }}
      </h2>

      <div class="space-y-6">
        <div>
          <p class="text-sm uppercase tracking-wider text-gray-500">{{ $t('contactSection.commonContact') }}</p>
          <a
            href="tel:+998555005200"
            class="text-xl hover:text-blue-600 transition-colors"
          >
            +998 55 500-5200
          </a>
        </div>

        <div>
          <p class="text-sm uppercase tracking-wider text-gray-500">
            {{ $t('contactSection.generalDirector') }}
          </p>
          <a
            href="tel:+998917117000"
            class="text-xl hover:text-blue-600 transition-colors"
          >
            +998 91 711-7000
          </a>
        </div>

        <div>
          <p class="text-sm uppercase tracking-wider text-gray-500">
            {{ $t('contactSection.manager') }}
          </p>
          <a
            href="tel:+998970205200"
            class="text-xl hover:text-blue-600 transition-colors"
          >
            +998 97 020-52-00
          </a>
        </div>
      </div>

      <!-- Social Links -->
      <div class="mt-12 flex gap-8">
        <a
          href="https://wa.me/998555005200"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-2 text-lg hover:text-green-600 transition-colors"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
            alt="WhatsApp"
            class="w-5 h-5"
          />
          WhatsApp
        </a>

        <a
          href="https://t.me/username"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-2 text-lg hover:text-blue-600 transition-colors"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png"
            alt="Telegram"
            class="w-5 h-5"
          />
          Telegram
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
// Statik kontent, script kerak emas
</script>
