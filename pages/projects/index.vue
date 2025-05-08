<script setup>
import { ref, computed } from 'vue'
import projectListRaw from '@/data/projectList.json'

const projectList = ref(projectListRaw.reverse());

const categ = ref('all')

function toggleCategory(value) {
  categ.value = categ.value === value ? 'all' : value
}

// Liste filtrée des projets
const filteredProjects = computed(() => {
  if (categ.value === 'all') return projectList.value
  return projectList.value.filter(project => {
    // Adapte les valeurs ici si besoin selon ton JSON
    if (categ.value === 'school') return project.categ === 'school'
    if (categ.value === 'prestation') return project.categ === 'prestation'
    if (categ.value === 'pro') return project.categ === 'pro'
    if (categ.value === 'perso') return project.categ === 'perso'
    return true
  })
})
</script>


<template>
  
    <!-- <div class="flex justify-center"> -->
      <div class="grid grid-cols-4 gap-[4%] mx-[30%] mt-[6%]">
        <button @click="toggleCategory('school'); console.log(categ)" class="bg-contrast-color bg-opacity-10 rounded-xl text-dark-color">Scolaire</button>
        <button @click="toggleCategory('prestation'); console.log(categ)" class="bg-contrast-color bg-opacity-10 rounded-xl text-dark-color">Prestation</button>
        <button @click="toggleCategory('pro'); console.log(categ)" class="bg-contrast-color bg-opacity-10 rounded-xl text-dark-color">Professionnel</button>
        <button @click="toggleCategory('perso'); console.log(categ)" class="bg-contrast-color bg-opacity-10 rounded-xl text-dark-color">Personnel</button>
      </div>
    <!-- </div> -->

    <div class="grid desktop:grid-cols-3 phone:gap-[4%] desktop:gap-[10%] mx-[10%] phone:mb-[250%] desktop:mb-[50%] mt-[6%]">
      <CardProject class="w-full"
        v-for="(project, index) in filteredProjects" 
        :key="index" 
        :project="project"/>
    </div>
  </template>
  