<script setup>
import {ref} from 'vue';

const notifOpen = ref(false);
</script>

<template>
    <div class="sticky top-0">
    <div class="absolute w-full h-screen bg-dark-color bg-opacity-0" :class="{'bg-opacity-70': notifOpen}">
        <div class="absolute top-[50%] left-[25%] w-[50%] bg-light-color rounded-xl border-primary-color border-2 shadow-md shadow-primary-color" v-if="notifOpen">
            <h1>Recherche d'alternance</h1>
            <p>Admis au master MSC Project Management & Business, je suis à la recherche d'une entreprise pour accueillir une alternance de 2 ans dans les alentours de Strasbourg</p>
            <div class="desktop:flex phone:grid justify-center gap-[20%] mt-[4%]">
            <RouterLink to="/contact"><button class="bg-light-color rounded-full desktop:px-[64px] phone:px-[10px] phone:text-sm desktop:text-lg py-[4%] text-center font-Primary font-bold drop-shadow-lg hover:scale-110 hover:-translate-y-2 hover:shadow-secondary-color hover:shadow-lg transition-all ease-in-out duration-300">Voir mon profil</button></RouterLink>
            <RouterLink to="/about"><button class="bg-light-color rounded-full desktop:px-[64px] phone:px-[10px] phone:text-sm desktop:text-lg py-[4%] text-center font-Primary font-bold drop-shadow-lg hover:scale-110 hover:-translate-y-2 hover:shadow-secondary-color hover:shadow-lg transition-all ease-in-out duration-300">Me contacter</button></RouterLink>
          </div>
        </div>
        <button class="absolute -bottom-3 left-5 rounded-full bg-primary-color px-4 py-2 animate-bounce" @click="notifOpen=!notifOpen;console.log(notifOpen)">1</button>
    </div>
    </div>
</template>