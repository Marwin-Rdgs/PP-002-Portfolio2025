<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'

const menuOpen = ref(false)

// Bloque le scroll quand le menu mobile est ouvert
watch(menuOpen, (isOpen) => {
  if (isOpen) {
    document.body.classList.add('overflow-hidden')
  } else {
    document.body.classList.remove('overflow-hidden')
  }
})

// Ferme le menu mobile si on passe en desktop
const handleResize = () => {
  if (window.innerWidth >= 1024) {
    menuOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <header class="grid desktop:grid-cols-3 phone:grid-cols-2 items-center bg-light-color phone:pt-[4%] desktop:pt-[1%] relative z-50 desktop:pb-[1%]">
    <NuxtLink to="/">
      <h1 class="ml-[4%] font-Primary font-bold text-2xl text-dark-color hover:animate-pulse">MarwinR.</h1>
    </NuxtLink>

    <ul class="phone:hidden desktop:flex justify-center gap-10">
      <li class="font-Secondary font-semibold text-lg text-dark-color hover:opacity-70 transition-all duration-300">
        <NuxtLink to="/projects/">Portfolio</NuxtLink>
      </li>
      <li class="font-Secondary font-semibold text-lg text-dark-color hover:opacity-70 transition-all duration-300">
        <NuxtLink to="/a-propos">À Propos</NuxtLink>
      </li>
    </ul>

    <div class="desktop:flex justify-center gap-[10%] phone:hidden">
      <NuxtLink to="/chez-marwinUnion/">
        <button class="bg-primary-color px-6 py-2 rounded-3xl text-lg font-Secondary font-bold text-contrast-color hover:bg-opacity-70 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
          Chez Marwin-Union
        </button>
      </NuxtLink>
      <NuxtLink to="/contact">
        <button class="bg-primary-color px-6 py-2 rounded-3xl text-lg font-Secondary font-bold text-contrast-color hover:bg-opacity-70 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
          Let's talk
        </button>
      </NuxtLink>
    </div>

    <div class="flex justify-end pr-10 desktop:hidden">
      <img src="/icons/menu-dark.svg" alt="Open menu" class="w-[38px]" v-show="!menuOpen" @click="menuOpen = true">
      <img src="/icons/close-dark.svg" alt="Close menu" class="w-[32px]" v-show="menuOpen" @click="menuOpen = false">
    </div>
  </header>

  <!-- Menu mobile -->
  <nav v-show="menuOpen" class="desktop:hidden fixed top-0 left-0 w-full h-full bg-light-color z-40 overflow-y-auto pt-[18%] px-[5%] transition-all duration-300">
    <ul class="flex flex-col gap-8">
      <li class="font-Secondary font-semibold text-2xl text-dark-color">
        <NuxtLink to="/projects/" @click="menuOpen = false">Portfolio</NuxtLink>
      </li>
      <li class="font-Secondary font-semibold text-2xl text-dark-color">
        <NuxtLink to="/a-propos" @click="menuOpen = false">À Propos</NuxtLink>
      </li>
      <li class="font-Secondary font-semibold text-2xl text-dark-color">
        <NuxtLink to="/contact" @click="menuOpen = false">Me contacter</NuxtLink>
      </li>
      <li class="font-Secondary font-semibold text-2xl text-dark-color">
        <NuxtLink to="/chez-marwinUnion/" @click="menuOpen = false">Chez Marwin-Union</NuxtLink>
      </li>
    </ul>
  </nav>
</template>
