<script setup>
import { ref, computed } from 'vue'
import projectListRaw from '@/data/projectList.json'
import { useHead } from '#imports';

useHead({
  title: 'Portfolio de Marwin Rodrigues',
  meta: [
    {
      name: 'description',
      content:
        'Découvrez l’ensemble des projets réalisés par Marwin Rodrigues : projets scolaires, personnels, prestations professionnelles et plus encore.'
    },
    {
      name: 'keywords',
      content:
        'Marwin Rodrigues, Business Manager, Entrepreneur, Développeur Web, Gestion de projet, Digital, Communication, SEO, NuxtJS, TailwindCSS, Chez Marwin Web, Chez Marwin TeamCare, Chez Marwin Union, Auto-entreprise, Agence de communication, Freelance, Strasbourg, Divonne les bains, Montbéliard, Doubs, Bas-rhin, Ain, projets, portfolio, Marwin Rodrigues, développement web, IT, freelance, prestation, scolaire, personnel, professionnel'
    },
    { name: 'author', content: 'Marwin Rodrigues' },

    // Open Graph
    { property: 'og:title', content: 'Portfolio de Marwin Rodrigues' },
    {
      property: 'og:description',
      content:
        'Parcourez la galerie complète des projets web et digitaux de Marwin Rodrigues.'
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://marwin-rodrigues.fr/projects' },
    { property: 'og:image', content: 'https://marwin-rodrigues.fr/imgs/Marwin/Marwin-Index.png' },

    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Portfolio de Marwin Rodrigues' },
    {
      name: 'twitter:description',
      content:
        'Galerie complète des projets web et digitaux réalisés par Marwin Rodrigues.'
    },
    { name: 'twitter:image', content: 'https://marwin-rodrigues.fr/imgs/Marwin/Marwin-Index.png' }
  ],
  link: [
    { rel: 'canonical', href: 'https://marwin-rodrigues.fr/projects' }
  ]
})


const projectList = ref([...projectListRaw].reverse())

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
const filteredProjects = computed(() => {
  return projectList.value.filter(project => {
    const matchesCategory =
      categ.value === 'all' || project.categ === categ.value

    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.value.toLowerCase())

    return matchesCategory && matchesSearch
  })
})
</script>

<template>
  <div class="grid desktop:grid-cols-4 gap-[4%] mx-[30%] mt-[6%]">
    <button @click="toggleCategory('school')" :class="buttonClass('school')">Scolaire</button>
    <button @click="toggleCategory('prestation')" :class="buttonClass('prestation')">Prestation</button>
    <button @click="toggleCategory('pro')" :class="buttonClass('pro')">Professionnel</button>
    <button @click="toggleCategory('perso')" :class="buttonClass('perso')">Personnel</button>
  </div>

  <!-- Barre de recherche -->
  <div class="mt-6 flex justify-center">
    <input
      v-model="searchQuery"
      type="text"
      placeholder="Rechercher un projet..."
      class="w-[80%] max-w-md px-4 py-2 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-contrast-color transition"
    />
  </div>

  <!-- Affichage des projets filtrés -->
  <div class="grid desktop:grid-cols-3 phone:gap-[4%] desktop:gap-[10%] mx-[10%] phone:mb-[450%] desktop:mb-[50%] mt-[6%]">
    <CardProject
      class="w-full"
      v-for="(project, index) in filteredProjects"
      :key="index"
      :project="project"
    />
  </div>
</template>