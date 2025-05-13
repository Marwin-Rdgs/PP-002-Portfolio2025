<script setup>
import { useRoute } from 'vue-router'
import projectListRaw from '@/data/projectList.json'

const route = useRoute()
const projectId = route.params.id

const project = projectListRaw.find(p => p.id === projectId)
</script>

<template>
    <section>
        <img :src="project.img" alt="" class="w-full h-full">
    </section>

    <h1>{{ project.title }}</h1>

    <div class="grid desktop:grid-cols-4 phone:gap-y-[12%]">
    <section class="mx-[4%] desktop:col-span-1">
        <h2 class="font-Primary font-bold text-xl text-dark-color">Détails du projet</h2>

        <div class="border-b-2 border-primary-color flex justify-between py-[2%]">
            <p class="font-Secondary font-semibold text-dark-color">Type de projet</p>
            <p class="font-Secondary font-normal text-dark-color">{{ project.categ }}</p>
        </div>
        
        <div class="border-b-2 border-primary-color flex justify-between py-[2%]">
            <p class="font-Secondary font-semibold text-dark-color">Date</p>
            <p class="font-Secondary font-normal text-dark-color">Avril 2025</p>
        </div>

        <div class=" flex justify-between py-[2%]">
            <p class="font-Secondary font-semibold text-dark-color">Role du projet</p>
            <p class="font-Secondary font-normal text-dark-color">Chef de projet</p>
        </div>
    </section>

    <section class="mx-[4%] desktop:col-span-3">
        <h2 class="font-Primary font-bold text-xl text-dark-color mb-[1%]">Contexte</h2>
        <p class="font-Secondary font-normal text-dark-color text-justify">Ask ip est une agence fictive de développement Web basée à Toulon. Elle propose des services d’UI/UX, de conception, de maintenance et d’hébergement. Nous étions 6 étudiants sur ce projet, dans le cadre de la SAE 201 au cours de notre première année de BUT MMI. En plus de créer entièrement l’identité d’ask ip, nous devions proposer et réaliser sa communication dans son entièreté.</p>
    </section>
    </div>

    <section class="mx-[2%] phone:mt-[18%] desktop:mt-[2%]">
        <h2 class="font-Primary font-bold text-2xl text-primary-color">Description</h2>
        <p class="font-Secondary font-normal text-dark-color">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus reprehenderit ab natus explicabo doloremque ea? Molestiae delectus suscipit et magnam tempora? Blanditiis ut perspiciatis autem asperiores quo inventore porro quod.</p>
    </section>

    <section>
        <h2>Logiciels utilisés</h2>
    </section>
    
    <section>
        <h2>boutons links</h2>
    </section>

    <!-- <section>
        <div class="mx-[8%] phone:grid desktop:flex gap-[4%]">
            <img src="/imgs/projects/AnthonyHecquet-Portfolio.JPG" alt="" class="w-[700px]">
            <img src="/imgs/projects/AnthonyHecquet-Portfolio.JPG" alt="" class="w-[700px]">
        </div>
        <div class="flex justify-center mt-[2%]">
            <img src="/imgs/projects/AnthonyHecquet-Portfolio.JPG" alt="" class="w-[700px]">
        </div>
    </section> -->


    <section class="mx-[8%] grid desktop:grid-cols-2 gap-[4%]">
        <img src="/imgs/projects/AnthonyHecquet-Portfolio.JPG" alt="" class="w-[700px]">
        <img src="/imgs/projects/AnthonyHecquet-Portfolio.JPG" alt="" class="w-[700px]">
        <img src="/imgs/projects/AnthonyHecquet-Portfolio.JPG" alt="" class="w-full desktop:col-span-2">
    </section>

    <section class="flex justify-between desktop:mt-[8%] phone:mt-[14%]">
        <button>Projet précédent</button>
        <button>Projet suivant</button>
    </section>

</template>