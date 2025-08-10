<script setup>
import { ref, computed } from 'vue'
import articleListRaw from '@/data/CMU-articles.json'
import { useHead } from '#imports';

useHead({
  title: "Articles | Chez Marwin Union - Agence de Communication & Événementielle",
  meta: [
    {
      name: "description",
      content:
        "Explorez les articles de Chez Marwin Union, votre source d'informations et conseils sur la communication digitale, l'événementiel, la gestion de projet et l'innovation."
    },
    {
      name: "keywords",
      content:
        "articles, communication digitale, événementiel, gestion de projet, innovation, Chez Marwin Union, Marwin Rodrigues, Business Manager, Entrepreneur, Développeur Web, Gestion de projet, Digital, Communication, SEO, NuxtJS, TailwindCSS, Chez Marwin Web, Chez Marwin TeamCare, Auto-entreprise, Agence de communication, Freelance, Strasbourg, Divonne les bains, Montbéliard, Doubs, Bas-rhin, Ain"
    },
    { name: "author", content: "Marwin Rodrigues" },

    // Open Graph
    { property: "og:title", content: "Articles | Chez Marwin Union - Agence de Communication & Événementielle" },
    {
      property: "og:description",
      content:
        "Découvrez les dernières actualités et conseils en communication digitale et événementiel par Chez Marwin Union."
    },
    { property: "og:image", content: "https://marwin-rodrigues.fr/imgs/Chez-MarwinUnion/CMU-Signature.svg" },
    { property: "og:url", content: "https://marwin-rodrigues.fr/chez-marwinUnion/articles" },
    { property: "og:type", content: "website" },

    // Twitter Card
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Articles | Chez Marwin Union - Agence de Communication & Événementielle" },
    {
      name: "twitter:description",
      content: "Suivez les articles et conseils de Chez Marwin Union pour vos projets digitaux et événementiels."
    },
    { name: "twitter:image", content: "https://marwin-rodrigues.fr/imgs/Chez-MarwinUnion/CMU-Signature.svg" }
  ],
  link: [
    { rel: "canonical", href: "https://marwin-rodrigues.fr/chez-marwinUnion/articles" }
  ]
});


const articleList = ref(articleListRaw)

const categ = ref('all')
const searchQuery = ref('')

// Fonction pour changer la catégorie
function toggleCategory(value) {
  categ.value = categ.value === value ? 'all' : value
}

// Classe des boutons dynamiquement
function buttonClass(category) {
  const isActive = categ.value === category
  return [
    'transition duration-300 ease-in-out transform rounded-full px-5 py-2 text-sm font-semibold focus:outline-none',
    'hover:scale-105 hover:bg-contrast-color hover:bg-opacity-20 active:scale-95',
    isActive
      ? 'bg-contrast-color text-white shadow-md ring-2 ring-offset-2 ring-contrast-color'
      : 'bg-contrast-color bg-opacity-10 text-dark-color'
  ]
}

// Filtrage combiné (catégorie + recherche)
const filteredArticles = computed(() => {
  return articleList.value.filter(article => {
    const matchesCategory =
      categ.value === 'all' || article.categ === categ.value

    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.value.toLowerCase())

    return matchesCategory && matchesSearch
  })
})
</script>

<template>
  <!-- Filtres par catégorie -->
  <div class="grid desktop:grid-cols-4 gap-[4%] mx-[30%] mt-[6%]">
    <button @click="toggleCategory('prestation')" :class="buttonClass('prestation')">Prestation</button>
    <button @click="toggleCategory('digital')" :class="buttonClass('digital')">Digital</button>
    <button @click="toggleCategory('news')" :class="buttonClass('news')">Nouveauté</button>
  </div>

  <!-- Barre de recherche -->
  <div class="mt-6 flex justify-center">
    <input
      v-model="searchQuery"
      type="text"
      placeholder="Rechercher un article..."
      class="w-[80%] max-w-md px-4 py-2 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-contrast-color transition"
    />
  </div>

  <!-- Affichage des articles filtrés -->
  <div class="grid desktop:grid-cols-3 phone:gap-[4%] desktop:gap-[10%] mx-[10%] phone:mb-[250%] desktop:mb-[50%] mt-[6%]">
    <CardArticle
      class="w-full"
      v-for="(article, index) in filteredArticles"
      :key="index"
      :article="article"
    />
  </div>
</template>
