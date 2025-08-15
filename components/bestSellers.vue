<template>
    <div class="container mx-auto py-12 px-4">
        <h2 class="text-center text-4xl font-semibold mb-10 leading-[50px]">{{ $t('bestSellers.title') }}</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-[1200px] mx-auto">
            <div class="broom-image-wrapper bg-[#F4F4F4] overflow-hidden flex flex-col md:flex-row">
                <div class="md:w-1/2 p-6 flex flex-col">
                    <h3 class="text-2xl font-semibold mb-2">{{ $t('bestSellers.1.name') }}</h3>
                    <p class="text-gray-600">{{ $t('bestSellers.1.desc') }}</p>
                </div>
                <div
                    class="md:w-1/2 flex items-center justify-center p-4"
                    >
                    <NuxtImg src="/1.png" alt="Classic L06 Broom" class="max-h-64 object-contain" />
                </div>
            </div>

            <div class="broom-image-wrapper bg-[#F4F4F4] overflow-hidden flex flex-col md:flex-row">
                <div class="md:w-1/2 p-6 flex flex-col">
                    <h3 class="text-2xl font-semibold mb-2">{{ $t('bestSellers.2.name') }}</h3>
                    <p class="text-gray-600">{{ $t('bestSellers.2.desc') }}</p>
                </div>
                <div class="md:w-1/2 flex items-center justify-center p-4">
                    <NuxtImg src="/2.png" alt="Lux AO2 Broom" class="max-h-64 object-contain"/>
                </div>
            </div>

            <div class="broom-image-wrapper bg-[#F4F4F4] overflow-hidden flex flex-col md:flex-row">
                <div class="md:w-1/2 p-6 flex flex-col">
                    <h3 class="text-2xl font-semibold mb-2">{{ $t('bestSellers.3.name') }}</h3>
                    <p class="text-gray-600">{{ $t('bestSellers.3.desc') }}</p>
                </div>
                <div class="md:w-1/2 flex items-center justify-center p-4">
                    <NuxtImg src="/3.png" alt="Lux AO3 Broom" class="max-h-64 object-contain"/>
                </div>
            </div>

            <div class="broom-image-wrapper bg-[#F4F4F4] overflow-hidden flex flex-col md:flex-row">
                <div class="md:w-1/2 p-6 flex flex-col">
                    <h3 class="text-2xl font-semibold mb-2">{{ $t('bestSellers.4.name') }}</h3>
                    <p class="text-gray-600">{{ $t('bestSellers.4.desc') }}</p>
                </div>
                <div class="md:w-1/2 flex items-center justify-center p-4">
                    <NuxtImg src="/4.png" alt="Lux AO1 Broom" class="max-h-64 object-contain"/>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.broom-image-wrapper {
  background-image: url('/cart-bg.png');
  background-repeat: no-repeat;
  background-position: bottom right;
  background-size: 50% 100%;
  /* background-size: 100px 100px; kerakli o‘lchamga qarab o‘zgartir */
}
</style>