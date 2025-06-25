<template>
  <nav class="bg-white border-gray-200 fixed top-0 left-0 w-full z-50 shadow">
    <div class="max-w-screen flex flex-wrap items-center overflow-x-hidden justify-between mx-auto px-6 lg:px-24 py-4">
      <NuxtLink to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <NuxtImg src="/logo.png" height="32" class="h-8" alt="Logo" />
      </NuxtLink>

      <div class="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
        <!-- Language button -->
        <button type="button" data-dropdown-toggle="language-dropdown-menu"
          class="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 rounded-lg cursor-pointer hover:bg-gray-100">
          <NuxtImg src="/globe.svg" height="25" width="25" />
        </button>
        <NuxtLink to="/cart"
          class="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 rounded-lg cursor-pointer hover:bg-gray-100">
          <NuxtImg src="/cart.svg" height="25" width="25" />
        </NuxtLink>

        <!-- Dropdown -->
        <div
            class="z-50 absolute top-13 right-10 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm min-w-[180px] max-w-[90vw] overflow-hidden"
            id="language-dropdown-menu"
        >

            <ul class="py-2 font-medium" role="none">
                <li>
                <button @click.prevent="changeLanguage('en')"
                    class="block px-4 py-2 w-full text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                    <div class="inline-flex">
                    {{ t('navbar.english') }}
                    </div>
                </button>
                </li>
                <li>
                <button @click.prevent="changeLanguage('ru')"
                    class="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                    <div class="inline-flex">
                    {{ t('navbar.russian') }}
                    </div>
                </button>
                </li>
                <li>
                <button @click.prevent="changeLanguage('uz')"
                    class="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                    <div class="inline-flex">
                    {{ t('navbar.uzbek') }}
                    </div>
                </button>
                </li>
            </ul>
        </div>


        <!-- Hamburger -->
        <button data-collapse-toggle="navbar-language" type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-language" aria-expanded="false">
          <span class="sr-only">{{ t('navbar.openMenu') }}</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
      </div>

      <!-- Navbar links -->
      <div class="items-center justify-between hidden w-full lg:flex md:w-auto md:order-1" id="navbar-language">
        <ul
          class="flex flex-col font-medium uppercase p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
          <li>
            <NuxtLink to="/" class="block py-2 px-3 text-gray-900 rounded-sm md:bg-transparent md:p-0" aria-current="page">
              {{ t('navbar.home') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/products" class="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-600">
              {{ t('navbar.product') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about" class="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-600">
              {{ t('navbar.about') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact" class="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-600">
              {{ t('navbar.contact') }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>


<script setup>
import { NuxtLink } from '#components';
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n';
const { t, locale } = useI18n()

const changeLanguage = (lang) => {
  locale.value = lang
}
onMounted(() => {
  // Dropdown toggle
  const dropdownToggle = document.querySelector('[data-dropdown-toggle="language-dropdown-menu"]')
  const dropdownMenu = document.getElementById('language-dropdown-menu')

  if (dropdownToggle && dropdownMenu) {
    dropdownToggle.addEventListener('click', () => {
      dropdownMenu.classList.toggle('hidden')
    })

    // Dropdownni tashqaridan bosganda yopish
    document.addEventListener('click', (e) => {
      if (!dropdownToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownMenu.classList.add('hidden')
      }
    })
  }

  // Hamburger menyu toggle
  const collapseToggle = document.querySelector('[data-collapse-toggle="navbar-language"]')
  const navMenu = document.getElementById('navbar-language')

  if (collapseToggle && navMenu) {
    collapseToggle.addEventListener('click', () => {
      navMenu.classList.toggle('hidden')
    })
  }
})
</script>
