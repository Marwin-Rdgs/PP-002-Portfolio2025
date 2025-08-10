<script setup>
import { useRoute } from 'vue-router'
import partnerListRaw from '@/data/partners.json'
import { useHead } from '#imports';

const route = useRoute()
const partnerId = route.params.id

const partner = partnerListRaw.find(p => p.id === partnerId)

useHead(() => {
  if (!partner) {
    return {
      title: "Partenaire Chez Marwin TeamCare | Chez Marwin Union",
      meta: [
        { name: "description", content: "Présentation d'un partenaire du service Chez Marwin TeamCare." },
        {
          name: "keywords",
          content:
            "Chez Marwin TeamCare, partenaire, événementiel entreprise, afterwork, teambuilding, dîner d'affaire, Chez Marwin Union, Marwin Rodrigues, Business Manager, Entrepreneur, Développeur Web, Gestion de projet, Digital, Communication, SEO, NuxtJS, TailwindCSS, Chez Marwin Web, Auto-entreprise, Agence de communication, Freelance, Strasbourg, Divonne les bains, Montbéliard, Doubs, Bas-rhin, Ain"
        },
        { name: "author", content: "Marwin Rodrigues" },
        // Open Graph minimal fallback
        { property: "og:title", content: "Partenaire Chez Marwin TeamCare | Chez Marwin Union" },
        { property: "og:description", content: "Présentation d'un partenaire du service Chez Marwin TeamCare." },
        { property: "og:type", content: "website" },
        // Twitter Card minimal fallback
        { name: "twitter:card", content: "summary" },
        { name: "twitter:title", content: "Partenaire Chez Marwin TeamCare | Chez Marwin Union" },
        { name: "twitter:description", content: "Présentation d'un partenaire du service Chez Marwin TeamCare." }
      ],
      link: [{ rel: "canonical", href: "https://marwin-rodrigues.fr/chez-marwin-Union/partner" }]
    }
  }

  const baseKeywords =
    "Marwin Rodrigues, Business Manager, Entrepreneur, Développeur Web, Gestion de projet, Digital, Communication, SEO, NuxtJS, TailwindCSS, Chez Marwin Web, Chez Marwin TeamCare, Chez Marwin Union, Auto-entreprise, Agence de communication, Freelance, Strasbourg, Divonne les bains, Montbéliard, Doubs, Bas-rhin, Ain";

  return {
    title: `${partner.name} | Partenaire Chez Marwin TeamCare`,
    meta: [
      {
        name: "description",
        content: partner.description || `Découvrez le partenaire "${partner.name}" du service Chez Marwin TeamCare.`
      },
      {
        name: "keywords",
        content: `${partner.name}, partenaire, Chez Marwin TeamCare, événementiel entreprise, afterwork, teambuilding, dîner d'affaire, ${baseKeywords}`
      },
      { name: "author", content: "Marwin Rodrigues" },

      // Open Graph
      { property: "og:title", content: `${partner.name} | Partenaire Chez Marwin TeamCare` },
      {
        property: "og:description",
        content: partner.description || `Présentation du partenaire "${partner.name}" du service Chez Marwin TeamCare.`
      },
      { property: "og:image", content: partner.logo },
      { property: "og:url", content: `https://marwin-rodrigues.fr/chez-marwin-Union/partner/${partner.id}` },
      { property: "og:type", content: "website" },

      // Twitter Card
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: `${partner.name} | Partenaire Chez Marwin TeamCare` },
      {
        name: "twitter:description",
        content: partner.description || `Présentation du partenaire "${partner.name}" du service Chez Marwin TeamCare.`
      },
      { name: "twitter:image", content: partner.logo }
    ],
    link: [
      { rel: "canonical", href: `https://marwin-rodrigues.fr/chez-marwin-Union/partner/${partner.id}` }
    ]
  }
});

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