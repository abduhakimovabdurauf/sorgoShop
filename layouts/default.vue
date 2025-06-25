<template>
    <ClientOnly>
        <div class="flex flex-col min-h-screen bg-[#f9fafb]">
            <navbar/>
            <main class="flex-grow">
                <slot />
            </main>
            <footerSection/>
        </div>
    </ClientOnly>
    
</template>