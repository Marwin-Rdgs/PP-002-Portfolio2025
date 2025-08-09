<script setup>
import { useRoute } from 'vue-router'
import articleListRaw from '@/data/CMU-articles.json'

const route = useRoute()
const articleId = route.params.id

const article = articleListRaw.find(a => a.id === articleId)
</script>

<template>
  <!-- --------------------------- Image entête --------------------------- -->
  <section aria-label="Entête de l'article">
    <img loading="lazy" :src="article.cover" :alt="article.alt" class="w-full h-full" />
  </section>

  <!-- --------------------------- Détails & Contexte --------------------------- -->
  <div class="grid desktop:grid-cols-4 phone:gap-y-[12%] mt-[2%]">
    <!-- Colonne gauche : détails -->
    <section aria-label="Détails de l'article" class="mx-[4%] desktop:col-span-1">
      <h2 class="font-Primary font-bold text-2xl text-primary-color">{{ article.title }}</h2>
      <h2 class="font-Primary font-bold text-xl text-dark-color">Détails de l'article</h2>

      <div class="border-b-2 border-primary-color flex justify-between py-[2%]">
        <p class="font-Secondary font-semibold text-dark-color">Catégorie de l'article</p>
        <p class="font-Secondary font-normal text-dark-color uppercase">{{ article.categ }}</p>
      </div>

      <div class="border-b-2 border-primary-color flex justify-between py-[2%]">
        <p class="font-Secondary font-semibold text-dark-color">Date</p>
        <p class="font-Secondary font-normal text-dark-color">{{ article.date }}</p>
      </div>

      <div class="border-b-2 border-primary-color flex justify-between py-[2%]">
        <p class="font-Secondary font-semibold text-dark-color">Auteur</p>
        <p class="font-Secondary font-normal text-dark-color">{{ article.auteur }}</p>
      </div>
    </section>

    <!-- Colonne droite : contexte -->
    <section aria-label="Introduction de l'article" class="mx-[4%] desktop:col-span-3">
      <h2 class="font-Primary font-bold text-xl text-dark-color mb-[1%]">Introduction</h2>
      <p class="font-Secondary font-normal text-dark-color text-justify">
        {{ article.intro }}
      </p>
    </section>
  </div>

  <!-- --------------------------- Description --------------------------- -->
  <section aria-label="Contenu de l'article" class="mx-[2%] phone:mt-[26%] desktop:mt-[2%]">
    <h2 class="font-Primary font-bold text-2xl text-primary-color">Contenu</h2>
    <p class="font-Secondary font-normal text-dark-color">
      {{ article.content }}
    </p>
  </section>

  <!-- --------------------------- Galerie --------------------------- -->
  <section aria-label="Galerie photo de l'article" class="mx-[8%] mt-8 grid desktop:grid-cols-2 gap-[4%] items-center">
    <img loading="lazy" v-if="article.img1!=''" :src="article.img1" alt="Image 1 de la gallerie photo du projet" class="w-[700px]" />
    <img loading="lazy" v-if="article.img2!=''" :src="article.img2" alt="Image 2 de la gallerie photo du projet" class="w-[700px]" />
    <img loading="lazy" v-if="article.img3!=''" :src="article.img3" alt="Image 3 de la gallerie photo du projet" class="w-full desktop:col-span-2"/>
  </section>

  <!-- --------------------------- Boutons / Navigation --------------------------- -->
  <section aria-label="Redirection de l'article" class="flex justify-between desktop:mt-[8%] phone:mt-[14%] mx-[4%]">
        <NuxtLink :to="article.previous" class="w-1/4 bg-primary-color bg-opacity-30 border-2 border-primary-color hover:bg-opacity-100 shadow-sm shadow-secondary-color hover:shadow-md hover:shadow-primary-color scale-100 hover:scale-110 rounded-3xl py-[1%] transition-all duration-300"><button class="w-full font-Primary text-dark-color desktop:text-lg phone:text-sm">Précédent</button></NuxtLink>
        <NuxtLink :to="article.next" class="w-1/4 bg-primary-color bg-opacity-30 border-2 border-primary-color hover:bg-opacity-100 shadow-sm shadow-secondary-color hover:shadow-md hover:shadow-primary-color scale-100 hover:scale-110 rounded-3xl py-[1%] transition-all duration-300"><button class="w-full font-Primary text-dark-color desktop:text-lg phone:text-sm">Suivant</button></NuxtLink>
  </section>


</template>