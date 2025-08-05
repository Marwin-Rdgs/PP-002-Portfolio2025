<script setup>
import { ref, computed } from 'vue'
import partnersListRaw from '@/data/partners.json'

const partnerList = ref([...partnersListRaw].reverse())

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
const filteredPartners = computed(() => {
  return partnerList.value.filter(partner => {
    const matchesCategory =
      categ.value === 'all' || partner.categ === categ.value

    const matchesSearch =
      partner.name.toLowerCase().includes(searchQuery.value.toLowerCase())

    return matchesCategory && matchesSearch
  })
})
</script>

<template>
  <!-- Filtres par catégorie -->
  <div class="grid desktop:grid-cols-4 gap-[4%] mx-[30%] mt-[6%]">
    <button @click="toggleCategory('anim')" :class="buttonClass('anim')">Animation</button>
    <button @click="toggleCategory('log')" :class="buttonClass('log')">Logistique</button>
    <button @click="toggleCategory('resto')" :class="buttonClass('resto')">Restauration</button>
  </div>

  <!-- Barre de recherche -->
  <div class="mt-6 flex justify-center">
    <input
      v-model="searchQuery"
      type="text"
      placeholder="Rechercher un partenaire..."
      class="w-[80%] max-w-md px-4 py-2 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-contrast-color transition"
    />
  </div>

  <!-- Affichage des articles filtrés -->
  <div class="grid desktop:grid-cols-3 phone:gap-[4%] desktop:gap-[10%] mx-[10%] phone:mb-[250%] desktop:mb-[50%] mt-[6%]">
    <Partner
      class="w-full"
      v-for="(partner, index) in filteredPartners"
      :key="index"
      :partner="partner"
    />
  </div>
</template>
