<script setup>
import {ref} from 'vue';
import CardArticle from '@/components/cardArticle.vue';
import articleListRaw from '@/Data/CMU-articles.json'

const articleList = ref(articleListRaw);
</script>

<template>
    <section class="flex justify-center items-center gap-[2%] mt-[6%] animate-pulse w-[90%] mx-auto">
        <img src="/imgs/Chez-MarwinUnion/CMU.svg" alt="" class="desktop:w-[128px] phone:w-[64px] animate-fadeIn">
        <h1 class="font-Primary desktop:text-8xl phone:text-2xl text-primary-color drop-shadow-lg animate-fadeIn">Chez Marwin-Union</h1>
    </section>
    <p class="text-justify mx-[10%] text-sm mt-[3%] mb-[6%]">Chez Marwin-Union, je propose une vision humaine et engagée de l’accompagnement professionnel. Fondée sur des valeurs de partage, d’écoute et de challenge, cette auto-entreprise évolue aux côtés de ses clients, en s’adaptant à leurs besoins réels. Aujourd’hui, elle rassemble deux pôles d’expertise : l’un dédié à la digitalisation de la communication, l’autre à la qualité de vie au travail. Deux approches complémentaires, avec un objectif commun : créer du lien, donner du sens, et avancer ensemble.</p>
    

    <section class="mb-[10%]">
        <h1>articles</h1>
        <div class="grid desktop:grid-cols-3 mx-[4%] gap-[2%]">
            <CardArticle         
                v-for="(article, index) in articleList" 
                :key="index" 
                :article="article"/>
        </div>
    </section>

    <section class="grid desktop:grid-cols-2 mx-[4%] gap-[10%]">

        <div class="grid mx-auto gap-y-[4%]">
            <div class="flex justify-center items-center gap-[2%]">
                <img src="/imgs/Chez-MarwinUnion/CMW.svg" alt="" class="desktop:w-[64px] phone:w-[32px] animate-fadeIn">
                <h1 class="font-Primary text-xl text-CMW-primary drop-shadow-lg animate-fadeIn">Chez Marwin-Web</h1>
            </div>
            <img src="/imgs/projects/citadelle.jpg" alt="" class="w-full">
            <p class="text-justify">fdklskf</p>
            <div class="flex justify-center">
                <NuxtLink to="/chez-marwinUnion/"><button class="bg-primary-color px-6 py-2 rounded-3xl text-lg font-Secondary font-bold text-contrast-color bg-opacity-100 hover:bg-opacity-70 hover:-translate-y-1 hover:shadow-lg hover:shadow-secondary-color transition-all ease-in-out duration-500">Contacter</button></NuxtLink>
            </div>
        </div>

        <div class="grid mx-auto gap-y-[4%]">
            <div class="flex justify-center items-center gap-[2%]">
                <img src="/imgs/Chez-MarwinUnion/CMTC.svg" alt="" class="desktop:w-[64px] phone:w-[32px] animate-fadeIn">
                <h1 class="font-Primary text-xl text-CMTC-primary drop-shadow-lg animate-fadeIn">Chez Marwin-TeamCare</h1>
            </div>
            <img src="/imgs/projects/citadelle.jpg" alt="" class="w-full">
            <p class="text-justify">fdklskf</p>
            <div class="flex justify-center">
                <NuxtLink to="/chez-marwinUnion/"><button class="bg-primary-color px-6 py-2 rounded-3xl text-lg font-Secondary font-bold text-contrast-color bg-opacity-100 hover:bg-opacity-70 hover:-translate-y-1 hover:shadow-lg hover:shadow-secondary-color transition-all ease-in-out duration-500">Contacter</button></NuxtLink>
            </div>
        </div>

    </section>
</template>