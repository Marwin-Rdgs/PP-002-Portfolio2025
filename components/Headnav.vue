<script setup>
import {ref} from 'vue';

const menuOpen = ref(false);

</script>

<template>
    <header class="grid desktop:grid-cols-3 phone:grid-cols-2 items-center bg-light-color phone:pt-[4%] desktop:pt-[1%] relative z-50">
       <NuxtLink to="/"> <h1 class="ml-[4%] font-Primary font-bold text-2xl text-dark-color hover:animate-pulse">MarwinR.</h1></NuxtLink>
        <ul class="phone:hidden desktop:flex justify-center gap-10">
            <li class="font-Secondary font-semibold text-lg text-dark-color opacity-100 hover:opacity-70 transition-all ease-in-out duration-500"><NuxtLink to="veille">Veille</NuxtLink></li>
            <li class="font-Secondary font-semibold text-lg text-dark-color opacity-100 hover:opacity-70 transition-all ease-in-out duration-500"><NuxtLink to="projects/">Projets</NuxtLink></li>
            <li class="font-Secondary font-semibold text-lg text-dark-color opacity-100 hover:opacity-70 transition-all ease-in-out duration-500"><NuxtLink to="about">À Propos</NuxtLink></li>
        </ul>
        <div class="desktop:flex justify-center gap-[10%] phone:hidden">
            <NuxtLink to="chez-marwinweb"><button class="bg-primary-color px-6 py-2 rounded-3xl text-lg font-Secondary font-bold text-contrast-color bg-opacity-100 hover:bg-opacity-70 hover:-translate-y-1 hover:shadow-lg hover:shadow-secondary-color transition-all ease-in-out duration-500">Chez Marwin-web</button></NuxtLink>
            <NuxtLink to="contact"><button class="bg-primary-color px-6 py-2 rounded-3xl text-lg font-Secondary font-bold text-contrast-color bg-opacity-100 hover:bg-opacity-70 hover:-translate-y-1 hover:shadow-lg hover:shadow-secondary-color transition-all ease-in-out duration-500">Let's talk</button></NuxtLink>
        </div>
        <div class="flex justify-end pr-10 desktop:hidden">
            <img src="/public/icons/menu-dark.svg" alt="" class="w-[38px]" v-show="!menuOpen" @click="menuOpen=!menuOpen">
            <img src="/public/icons/close-dark.svg" alt="" class="w-[32px]" v-show="menuOpen" @click="menuOpen=!menuOpen">
        </div>
    </header>
    <nav class="desktop:hidden pt-[6%] bg-light-color z-50" v-show="menuOpen">
        <ul class="grid gap-[10%] z-50 bg-light-color">
            <hr class="w-full h-1 bg-primary-color bg-opacity-55 border-0 z-50">
            <li class="font-Secondary font-semibold text-2xl text-dark-color pl-[2%] z-50 bg-light-color"><NuxtLink to="veille" @click="menuOpen=!menuOpen">Veille</NuxtLink></li>
            <hr class="w-full h-1 bg-primary-color bg-opacity-55 border-0 z-50">
            <li class="font-Secondary font-semibold text-2xl text-dark-color pl-[2%] z-50 bg-light-color"><NuxtLink to="projects/" @click="menuOpen=!menuOpen">Projets</NuxtLink></li>
            <hr class="w-full h-1 bg-primary-color bg-opacity-55 border-0">
            <li class="font-Secondary font-semibold text-2xl text-dark-color pl-[2%] z-50 bg-light-color"><NuxtLink to="about" @click="menuOpen=!menuOpen">À Propos</NuxtLink></li>
            <hr class="w-full h-1 bg-primary-color bg-opacity-55 border-0">
            <li class="font-Secondary font-semibold text-2xl text-dark-color pl-[2%] z-50 bg-light-color"><NuxtLink to="contact" @click="menuOpen=!menuOpen">Me contacter</NuxtLink></li>
            <hr class="w-full h-1 bg-primary-color bg-opacity-55 border-0">
            <li class="font-Secondary font-semibold text-2xl text-dark-color pl-[2%] z-50 bg-light-color"><NuxtLink to="chez-marwinweb" @click="menuOpen=!menuOpen">Chez Marwin-web</NuxtLink></li>
            <hr class="w-full h-1 bg-primary-color bg-opacity-55 border-0 z-50">
        </ul>
    </nav>
</template>