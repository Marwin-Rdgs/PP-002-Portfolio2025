<script setup>
import { ref } from 'vue'

const categ = ref('all')

function toggleCategory(value) {
  categ.value = categ.value === value ? 'all' : value
}
</script>


<template>
    <h1>Page de listing de mes projets</h1>
  
    <!-- <div class="flex justify-center"> -->
      <div class="grid grid-cols-4 gap-[4%] mx-[30%]">
        <button @click="toggleCategory('scool'); console.log(categ)" class="bg-contrast-color bg-opacity-10 rounded-xl text-dark-color">Scolaire</button>
        <button @click="toggleCategory('presta'); console.log(categ)" class="bg-contrast-color bg-opacity-10 rounded-xl text-dark-color">Prestation</button>
        <button @click="toggleCategory('pro'); console.log(categ)" class="bg-contrast-color bg-opacity-10 rounded-xl text-dark-color">Professionnel</button>
        <button @click="toggleCategory('perso'); console.log(categ)" class="bg-contrast-color bg-opacity-10 rounded-xl text-dark-color">Personnel</button>
      </div>
    <!-- </div> -->
  </template>
  