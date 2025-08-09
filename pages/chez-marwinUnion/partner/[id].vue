<script setup>
import { useRoute } from 'vue-router'
import partnerListRaw from '@/data/partners.json'

const route = useRoute()
const partnerId = route.params.id

const partner = partnerListRaw.find(p => p.id === partnerId)
</script>

<template>
    <div class="border-2 border-primary-color border-opacity-40 shadow-md shadow-secondary-color desktop:w-1/2 phone:w-5/6 mx-auto pt-[2%] desktop:pb-[10%] phone:pb-[32%] px-[4%] animate-pulse desktop:mt-[6%] phone:mt-[12%] grid gap-[4%]">
            <img loading="lazy" :src="partner.logo" :alt="partner.name" class="w-[256px] rounded-full mx-auto">
            <h1 class="text-center font-Primary text-2xl font-bold">{{ partner.name }}</h1>
            <p class="text-justify font-Secondary text-sm">{{ partner.description }}</p>

            <!-- --------------------------- Links --------------------------- -->
    <div class="mt-8 mx-[8%] flex justify-center gap-[10%]">
        <NuxtLink :to="partner.link" target="_blank" class="w-1/2 bg-primary-color bg-opacity-30 border-2 border-primary-color hover:bg-opacity-100 shadow-sm shadow-secondary-color hover:shadow-md hover:shadow-primary-color scale-100 hover:scale-110 rounded-3xl py-[1%] transition-all duration-300"><button class="w-full font-Primary text-dark-color desktop:text-lg phone:text-sm">Savoir plus</button></NuxtLink>
    </div>

  </div>
</template>