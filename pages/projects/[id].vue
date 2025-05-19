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
  avada: avadaIcon
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
    <img :src="project.img" alt="" class="w-full h-full" />
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
        <p class="font-Secondary font-normal text-dark-color">Avril 2025</p>
      </div>

      <div class="flex justify-between py-[2%]">
        <p class="font-Secondary font-semibold text-dark-color">Rôle</p>
        <p class="font-Secondary font-normal text-dark-color">Chef de projet</p>
      </div>
    </section>

    <!-- Colonne droite : contexte -->
    <section class="mx-[4%] desktop:col-span-3">
      <h2 class="font-Primary font-bold text-xl text-dark-color mb-[1%]">Contexte</h2>
      <p class="font-Secondary font-normal text-dark-color text-justify">
        Ask ip est une agence fictive de développement Web basée à Toulon. Elle propose des services
        d’UI/UX, de conception, de maintenance et d’hébergement. Nous étions 6 étudiants sur ce
        projet, dans le cadre de la SAE 201 au cours de notre première année de BUT MMI. En plus de
        créer entièrement l’identité d’ask ip, nous devions proposer et réaliser sa communication
        dans son entièreté.
      </p>
    </section>
  </div>

  <!-- --------------------------- Description --------------------------- -->
  <section class="mx-[2%] phone:mt-[18%] desktop:mt-[2%]">
    <h2 class="font-Primary font-bold text-2xl text-primary-color">Description</h2>
    <p class="font-Secondary font-normal text-dark-color">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus reprehenderit ab natus
      explicabo doloremque ea? Molestiae delectus suscipit et magnam tempora? Blanditiis ut
      perspiciatis autem asperiores quo inventore porro quod.
    </p>
  </section>

  <!-- --------------------------- Logiciels utilisés --------------------------- -->
  <section class="mt-8">
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
          class="w-full h-full cursor-pointer scale-100 transition-transform group-hover:scale-110"
        />
      </li>
    </ul>
  </section>

    <!-- --------------------------- Links --------------------------- -->
  <section class="mt-8">
    <h2>boutons links</h2>
  </section>


  <!-- --------------------------- Galerie --------------------------- -->
  <section class="mx-[8%] grid desktop:grid-cols-2 gap-[4%]">
    <img src="/imgs/projects/AnthonyHecquet-Portfolio.JPG" alt="" class="w-[700px]" />
    <img src="/imgs/projects/AnthonyHecquet-Portfolio.JPG" alt="" class="w-[700px]" />
    <img
      src="/imgs/projects/AnthonyHecquet-Portfolio.JPG"
      alt=""
      class="w-full desktop:col-span-2"
    />
  </section>

  <!-- --------------------------- Boutons / Navigation --------------------------- -->
  <section class="flex justify-between desktop:mt-[8%] phone:mt-[14%]">
    <button>Projet précédent</button>
    <button>Projet suivant</button>
  </section>


</template>