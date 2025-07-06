<script setup lang="ts">
/* ----------------------------------------------------------------
   Imports
---------------------------------------------------------------- */
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import projectListRaw from '@/data/projectList.json'

/* ----------------------------------------------------------------
   Route & données du projet
---------------------------------------------------------------- */
const route = useRoute()
const projectId = route.params.id as string
const project = projectListRaw.find(p => p.id === projectId)

/* ----------------------------------------------------------------
   Icônes disponibles (complète au besoin)
---------------------------------------------------------------- */
import AlpineIcon from '@/components/tools/Alpine.vue';
import adobeIcon from '@/components/tools/adobe.vue';
import angularIcon from '@/components/tools/angular.vue';
import animateIcon from '@/components/tools/animate.vue';
import AzureDevopsIcon from '@/components/tools/AzureDevops.vue';
import blenderIcon from '@/components/tools/blender.vue';
import bootstrapIcon from '@/components/tools/bootstrap.vue';
import bootswatchIcon from '@/components/tools/bootswatch.vue';
import chartjsIcon from '@/components/tools/chartjs.vue';
import chatgptIcon from '@/components/tools/chatgpt.vue';
import codepenIcon from '@/components/tools/codepen.vue';
import copilotIcon from '@/components/tools/copilot.vue';
import cssIcon from '@/components/tools/css.vue';
import DaVinciIcon from '@/components/tools/DaVinci.vue';
import emotionIcon from '@/components/tools/emotion.vue';
import figmaIcon from '@/components/tools/figma.vue';
import filmoraIcon from '@/components/tools/filmora.vue';
import firebaseIcon from '@/components/tools/firebase.vue';
import gitIcon from '@/components/tools/git.vue';
import gitbookIcon from '@/components/tools/gitbook.vue';
import githubIcon from '@/components/tools/github.vue';
import gitlabIcon from '@/components/tools/gitlab.vue';
import htmlIcon from '@/components/tools/html.vue';
import illustratorIcon from '@/components/tools/illustrator.vue';
import javaIcon from '@/components/tools/java.vue';
import jsIcon from '@/components/tools/js.vue';
import metricoolIcon from '@/components/tools/metricool.vue';
import musicscreenIcon from '@/components/tools/musicscreen.vue';
import netIcon from '@/components/tools/net.vue';
import nodeIcon from '@/components/tools/node.vue';
import notionIcon from '@/components/tools/notion.vue';
import nuxtIcon from '@/components/tools/nuxt.vue';
import obsIcon from '@/components/tools/obs.vue';
import officeIcon from '@/components/tools/office.vue';
import OpenClassroomIcon from '@/components/tools/OpenClassroom.vue';
import openstreetmapIcon from '@/components/tools/openstreetmap.vue';
import openweathermapIcon from '@/components/tools/openweathermap.vue';
import pexelsIcon from '@/components/tools/pexels.vue';
import photoroomIcon from '@/components/tools/photoroom.vue';
import photoshopIcon from '@/components/tools/photoshop.vue';
import phpIcon from '@/components/tools/php.vue';
import phpmyadminIcon from '@/components/tools/phpmyadmin.vue';
import phpstormIcon from '@/components/tools/phpstorm.vue';
import postgresqlIcon from '@/components/tools/postgresql.vue';
import powerappsIcon from '@/components/tools/powerapps.vue';
import powerautomateIcon from '@/components/tools/powerautomate.vue';
import powerplatformIcon from '@/components/tools/powerplatform.vue';
import prismicIcon from '@/components/tools/prismic.vue';
import pythonIcon from '@/components/tools/python.vue';
import scssIcon from '@/components/tools/scss.vue';
import seleniumIcon from '@/components/tools/selenium.vue';
import slidesgoIcon from '@/components/tools/slidesgo.vue';
import sqliteIcon from '@/components/tools/sqlite.vue';
import storysetIcon from '@/components/tools/storyset.vue';
import supabaseIcon from '@/components/tools/supabase.vue';
import tailwindIcon from '@/components/tools/tailwind.vue';
import threejsIcon from '@/components/tools/threejs.vue';
import tolgeeIcon from '@/components/tools/tolgee.vue';
import trelloIcon from '@/components/tools/trello.vue';
import uikitIcon from '@/components/tools/uikit.vue';
import unrealIcon from '@/components/tools/unreal.vue';
import vantajsIcon from '@/components/tools/vantajs.vue';
import vbaIcon from '@/components/tools/vba.vue';
import vscodeIcon from '@/components/tools/vscode.vue';
import vueIcon from '@/components/tools/vue.vue';
import wixIcon from '@/components/tools/wix.vue';
import wordpressIcon from '@/components/tools/wordpress.vue';
import xdIcon from '@/components/tools/xd.vue';
import avadaIcon from '@/components/tools/avada.vue';
import infomaniakEventsIcon from '@/components/tools/infomaniakEvents.vue';


const toolComponents: Record<string, any> = {
  alpine: AlpineIcon,
  adobe: adobeIcon,
  angular: angularIcon,
  animate: animateIcon,
  devops: AzureDevopsIcon,
  blender: blenderIcon,
  bootstrap: bootstrapIcon,
  bootswatch: bootswatchIcon,
  chatjs: chartjsIcon,
  chatgpt: chatgptIcon,
  codepen: codepenIcon,
  copilot: copilotIcon,
  css: cssIcon,
  davinci: DaVinciIcon,
  emotion: emotionIcon,
  figma: figmaIcon,
  filmora: filmoraIcon,
  firebase: firebaseIcon,
  git: gitIcon,
  gitbook: gitbookIcon,
  github: githubIcon,
  gitlab: gitlabIcon,
  html: htmlIcon,
  illustrator: illustratorIcon,
  java: javaIcon,
  js: jsIcon,
  metricool: metricoolIcon,
  musicscreen: musicscreenIcon,
  net: netIcon,
  node: nodeIcon,
  notion: notionIcon,
  nuxt: nuxtIcon,
  obs: obsIcon,
  office: officeIcon,
  OpenClassroom : OpenClassroomIcon,
  openstreetmap: openstreetmapIcon,
  openweathermap: openweathermapIcon,
  pexels: pexelsIcon,
  photoroom: photoroomIcon,
  photoshop: photoshopIcon,
  php: phpIcon,
  phpmyadmin: phpmyadminIcon,
  phpstorm: phpstormIcon,
  postgresql: postgresqlIcon,
  powerapps: powerappsIcon,
  powerautomate: powerautomateIcon,
  powerapps: powerappsIcon,
  prismic: prismicIcon,
  python: pythonIcon,
  scss: scssIcon,
  selenium: seleniumIcon,
  slidesgo: slidesgoIcon,
  sqlite: sqliteIcon,
  storyset: storysetIcon,
  supabase: supabaseIcon,
  tailwind: tailwindIcon,
  threejs: threejsIcon,
  tolgee: tolgeeIcon,
  trello: trelloIcon,
  uikit: uikitIcon,
  unreal: unrealIcon,
  vantajs: vantajsIcon,
  vba: vbaIcon,
  vscode: vscodeIcon,
  vue: vueIcon,
  wix: wixIcon,
  wordpress: wordpressIcon,
  xd: xdIcon,
  avada: avadaIcon,
  infomaniakEvents: infomaniakEventsIcon,
}

/* ----------------------------------------------------------------
   Outils utilisés par CE projet (à partir de project.tools)
---------------------------------------------------------------- */
const projectTools = computed(() => {
  const list = Array.isArray(project?.tools)
    ? project.tools
    : (project?.tools ?? '').split(',')

  return list
    .map(t => t.trim().toLowerCase())
    .map(key => toolComponents[key])
    .filter(Boolean)              // supprime les clés inconnues
})
</script>

<template>
  <!-- --------------------------- Image entête --------------------------- -->
  <section>
    <img :src="project.img" :alt="project.alt" class="w-full h-full" />
  </section>

  <!-- --------------------------- Détails & Contexte --------------------------- -->
  <div class="grid desktop:grid-cols-4 phone:gap-y-[12%] mt-[2%]">
    <!-- Colonne gauche : détails -->
    <section class="mx-[4%] desktop:col-span-1">
      <h2 class="font-Primary font-bold text-2xl text-primary-color">{{ project.title }}</h2>
      <h2 class="font-Primary font-bold text-xl text-dark-color">Détails du projet</h2>

      <div class="border-b-2 border-primary-color flex justify-between py-[2%]">
        <p class="font-Secondary font-semibold text-dark-color">Type de projet</p>
        <p class="font-Secondary font-normal text-dark-color uppercase">{{ project.categ }}</p>
      </div>

      <div class="border-b-2 border-primary-color flex justify-between py-[2%]">
        <p class="font-Secondary font-semibold text-dark-color">Date</p>
        <p class="font-Secondary font-normal text-dark-color">{{ project.date }}</p>
      </div>

      <div class="flex justify-between py-[2%]">
        <p class="font-Secondary font-semibold text-dark-color">Rôle</p>
        <p class="font-Secondary font-normal text-dark-color">{{project.role}}</p>
      </div>
    </section>

    <!-- Colonne droite : contexte -->
    <section class="mx-[4%] desktop:col-span-3">
      <h2 class="font-Primary font-bold text-xl text-dark-color mb-[1%]">Contexte</h2>
      <p class="font-Secondary font-normal text-dark-color text-justify">
        {{ project.context }}
      </p>
    </section>
  </div>

  <!-- --------------------------- Description --------------------------- -->
  <section class="mx-[2%] phone:mt-[18%] desktop:mt-[2%]">
    <h2 class="font-Primary font-bold text-2xl text-primary-color">Description</h2>
    <p class="font-Secondary font-normal text-dark-color">
      {{ project.description }}
    </p>
  </section>

  <!-- --------------------------- Description --------------------------- -->
  <section v-if="project.retour!=''" class="mx-[2%] phone:mt-[18%] desktop:mt-[2%]">
    <h2 class="font-Primary font-bold text-2xl text-primary-color">Retour</h2>
    <p class="font-Secondary font-normal text-dark-color italic">
      {{ project.retour }}
    </p>
  </section>

  <!-- --------------------------- Logiciels utilisés --------------------------- -->
  <section class="mt-8 mx-[2%]">
    <h2 class="font-Primary font-bold text-2xl text-primary-color mb-4">
      Logiciels utilisés
    </h2>

    <ul class="flex flex-wrap gap-4">
      <li
        v-for="(Icon, idx) in projectTools"
        :key="idx"
        class="group w-12 h-12"
      >
        <component
          :is="Icon"
          class="cursor-pointer"
        />
      </li>
    </ul>
  </section>

    <!-- --------------------------- Links --------------------------- -->
  <section class="mt-8 mx-[8%] flex justify-center gap-[10%]">
    <NuxtLink v-if="project.doc!=''" :to="project.doc" target="_blank" class="w-full bg-primary-color bg-opacity-30 border-2 border-primary-color hover:bg-opacity-100 shadow-sm shadow-secondary-color hover:shadow-md hover:shadow-primary-color scale-100 hover:scale-110 rounded-3xl py-[1%] transition-all duration-300"><button class="w-full font-Primary text-dark-color desktop:text-lg phone:text-sm">Documentation</button></NuxtLink>
    <NuxtLink v-if="project.link!=''" :to="project.link" target="_blank" class="w-full bg-primary-color bg-opacity-100 border-2 border-primary-color hover:bg-opacity-30 shadow-sm shadow-secondary-color hover:shadow-md hover:shadow-primary-color scale-110 hover:scale-100 rounded-3xl py-[1%] transition-all duration-300"><button class="w-full font-Primary text-dark-color desktop:text-lg phone:text-sm w-full">Le projet</button></NuxtLink>
    <NuxtLink v-if="project.repos!=''" :to="project.repos" target="_blank" class="w-full bg-primary-color bg-opacity-30 border-2 border-primary-color hover:bg-opacity-100 shadow-sm shadow-secondary-color hover:shadow-md hover:shadow-primary-color scale-100 hover:scale-110 rounded-3xl py-[1%] transition-all duration-300"><button class="w-full font-Primary text-dark-color desktop:text-lg phone:text-sm">Repository</button></NuxtLink>
  </section>


  <!-- --------------------------- Galerie --------------------------- -->
  <section class="mx-[8%] mt-8 grid desktop:grid-cols-2 gap-[4%]">
    <img v-if="project.img1!=''" :src="project.img1" alt="Image 1 de la gallerie photo du projet" class="w-[700px]" />
    <img v-if="project.img2!=''" :src="project.img2" alt="Image 2 de la gallerie photo du projet" class="w-[700px]" />
    <img v-if="project.img3!=''" :src="project.img3" alt="Image 3 de la gallerie photo du projet" class="w-full desktop:col-span-2"/>
  </section>

  <!-- --------------------------- Boutons / Navigation --------------------------- -->
  <section class="flex justify-between desktop:mt-[8%] phone:mt-[14%] mx-[4%]">
        <NuxtLink :to="project.previous" class="w-1/4 bg-primary-color bg-opacity-30 border-2 border-primary-color hover:bg-opacity-100 shadow-sm shadow-secondary-color hover:shadow-md hover:shadow-primary-color scale-100 hover:scale-110 rounded-3xl py-[1%] transition-all duration-300"><button class="w-full font-Primary text-dark-color desktop:text-lg phone:text-sm">Précédent</button></NuxtLink>
        <NuxtLink :to="project.next" class="w-1/4 bg-primary-color bg-opacity-30 border-2 border-primary-color hover:bg-opacity-100 shadow-sm shadow-secondary-color hover:shadow-md hover:shadow-primary-color scale-100 hover:scale-110 rounded-3xl py-[1%] transition-all duration-300"><button class="w-full font-Primary text-dark-color desktop:text-lg phone:text-sm">Suivant</button></NuxtLink>
  </section>


</template>