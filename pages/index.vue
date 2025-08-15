<template>
    <hero-section/>
    <offer-section></offer-section>
    <advantage-section></advantage-section>
    <best-sellers></best-sellers>
    <products></products>
    <contact-section></contact-section>
</template>

<script setup lang="ts">
import { useHead } from '#imports'

useHead({
  title: 'Sorgo Trade | Home',
  meta: [
    {
      name: 'description',
      content: 'Sorgo Trade ekologik jo‘xoridan tayyorlangan supurgi va metlalarni ishlab chiqaradigan yetakchi kompaniya. Yuqori sifat, tez yetkazib berish, raqobatbardosh narxlar.',
    },
    {
      name: 'keywords',
      content: 'sorgo, supurgi, metla, ekologik mahsulot, ishlab chiqaruvchi, O‘zbekiston, eksport, sorgo, supurgi, metla, экологически чистый продукт, производство, экспорт, Uzbekistan, ecological product, broom, manufacturer, export, метла, веник, производство веников, sorghum',
    },
    { name: 'author', content: 'Sorgo Trade' },

    { property: 'og:title', content: 'Sorgo Trade | Home' },
    {
      property: 'og:description',
      content: 'Jo‘xoridan tayyorlangan sifatli va ekologik supurgilarni bizdan toping.',
    },
    {
      property: 'og:image',
      content: '/background.jpg',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://sorgotrade.uz/' },

    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Sorgo Trade | Home' },
    {
      name: 'twitter:description',
      content: 'Jo‘xoridan tayyorlangan sifatli va ekologik supurgilarni bizdan toping.',
    },
    { name: 'twitter:image', content: '/background.jpg' },
  ],
})
</script>