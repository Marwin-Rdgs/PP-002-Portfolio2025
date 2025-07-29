<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import CarouselFeedback from '@/components/CarouselFeedback.vue'
import feedbackListRaw from '@/Data/feedbackIndex.json'
import projectListRaw from '@/data/projectList.json'
import Calendly from '~/components/Calendly.vue'

const showCalendly = ref(false)
const avis = ref(1)
const feedbackList = ref(feedbackListRaw)
const projectList = ref([]) // on initialise vide

// Fonction de mise à jour du nombre de projets selon l'écran
const updateProjectList = () => {
  const isMobile = window.matchMedia('(max-width: 768px)').matches
  projectList.value = isMobile
    ? projectListRaw.slice(-2,-1).reverse()   // 2 projets si mobile
    : projectListRaw.slice(-5, -1).reverse() // 4 projets sinon
}

onMounted(() => {
  updateProjectList()
  window.addEventListener('resize', updateProjectList)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateProjectList)
})
</script>


<template>
    <section class="relative h-full pt-[6%] flex flex-col items-center">
      <!-- Texte bien au-dessus -->
      <h1 class="text-center text-dark-color phone:text-4xl desktop:text-6xl font-Primary font-bold mx-[20%] z-10">
        Je suis <span class="font-extrabold text-primary-color">Marwin</span>. 
        Business Manager & Entrepreneur.
      </h1>
  
      <div class="flex justify-center -mt-[20%]">
        <img 
          src="/imgs/Marwin/Marwin-index.png" 
          alt="Image de Marwin RODRIGUES" 
          class="w-full h-auto object-cover z-0"
        />
      </div>
    </section>
  
    <section class="bg-dark-color p-10 flex justify-center gap-[10%]">
      <p class="text-primary-color font-Secondary text-7xl">“</p>
      <h2 class="text-light-color text-center font-Primary font-extrabold desktop:text-2xl italic desktop:w-[37%]">C’est en repoussant ses limites que l’on découvre qui l’on est vraiment</h2>
      <p class="text-primary-color font-Secondary text-7xl rotate-180">”</p>
    </section>

    <section class="absolute bg-primary-color w-[70%] phone:h-[164px] desktop:h-[256px] right-[15%] phone:-mt-[8%] desktop:-mt-[2%] z-10">
          <h2 class="text-dark-color font-Primary text-center font-bold phone:text-base desktop:text-5xl w-[80%] mx-auto mt-[4%]">Vous souhaitez réaliser votre projet de rêve avec moi ?</h2>
          <div class="desktop:flex phone:grid justify-center gap-[20%] mt-[4%]">
            <RouterLink to="/contact"><button class="bg-light-color rounded-full desktop:px-[64px] phone:px-[10px] phone:text-sm desktop:text-lg py-[4%] text-center font-Primary font-bold drop-shadow-lg hover:scale-110 hover:-translate-y-2 hover:shadow-secondary-color hover:shadow-lg transition-all ease-in-out duration-300">Me contacter</button></RouterLink>
            <div><button  @click="showCalendly = true" class="bg-light-color rounded-full desktop:px-[64px] phone:px-[10px] phone:text-sm desktop:text-lg py-[4%] text-center font-Primary font-bold drop-shadow-lg hover:scale-110 hover:-translate-y-2 hover:shadow-secondary-color hover:shadow-lg transition-all ease-in-out duration-300">Planifier une visio</button></div>
          
                <Calendly
                  :show="showCalendly"
                  @close="showCalendly = false"
                  url="https://calendly.com/contact-aezn/marwin-rodrigues"
                />
          
          </div>
    </section>

    <section class="relative grid desktop:grid-cols-2 phone:mt-[60%] desktop:mt-[20%]">
      <div class="grid gap-[6%] ml-[4%]">
        <h3 class="font-Primary font-bold text-dark-color phone:text-2xl desktop:text-5xl">Derrière chaque projet, une histoire. <span class="text-primary-color">Voici la mienne</span>.</h3>
        <p class="font-Secondary text-dark-color desktop:text-lg phone:text-sm">Passionné par le digital depuis le collège, j’ai forgé un parcours hybride alliant développement web, design, communication, gestion de projet et entrepreneuriat. J’aime transformer une idée en réalité concrète, mêlant technique et vision stratégique pour créer des projets ambitieux, utiles et centrés sur l’humain.</p>
        <p class="font-Secondary text-dark-color desktop:text-lg phone:text-sm">Entre missions en entreprise, expériences entrepreneuriales et projets collaboratifs, je cultive une approche tournée vers l’innovation utile, l’impact humain et le dépassement de soi. Aujourd’hui, je trace mon chemin avec une ambition affirmée : faire du numérique un moteur de progrès collectif, en bâtissant des projets porteurs de sens, durables et fédérateurs.</p>
        <RouterLink to="/about"><button class="bg-primary-color text-dark-color rounded-full desktop:px-[24px] phone:px-[10px] phone:text-sm desktop:text-lg py-[1%] text-center font-Primary font-bold drop-shadow-lg hover:scale-110 hover:translate-x-6 hover:shadow-secondary-color hover:shadow-lg transition-all ease-in-out duration-500">Savoir plus</button></RouterLink>      
      </div>

      <img src="/imgs/Marwin/Marwin-IndexBio.png" alt="" class=" desktop:absolute desktop:right-0 desktop:-top-64 object-cover z-0">
      
    </section>

    <section class="desktop:mt-[10%] phone:mt-[20%]">
      <h3 class="desktop:text-5xl phone:text-4xl font-Primary font-bold text-primary-color ml-[2%]">Mon dernier projet</h3>

      <div class="bg-[url(/imgs/projects/SoireeCanap/SoireeCanap.png)] bg-cover bg-center mt-[1%] h-[100%]">
        <div class="grid items-center bg-light-color bg-opacity-5 rounded-r-full w-[50%] pl-[2%] pr-[4%] pt-[4%] h-[500px]">
          <h2 class="desktop:text-5xl phone:text-3xl font-Primary font-bold text-primary-color drop-shadow-xl">Soirée Canap</h2>
          <p class="desktop:text-lg phone:text-base font-Secondary font-medium text-light-color drop-shadow-md">Talk Show sur scène à Montbéliard autour de la formation BUT MMI</p>
          <RouterLink to="/projects/PC2025004"><button class="bg-primary-color text-dark-color rounded-full desktop:px-[24px] phone:px-[10px] phone:text-sm desktop:text-lg py-[1%] text-center font-Primary font-bold drop-shadow-lg hover:scale-110 hover:translate-x-6 hover:shadow-secondary-color hover:shadow-lg transition-all ease-in-out duration-500">Voir plus</button></RouterLink>
        </div>
      </div>
      <div class="desktop:flex phone:flex-col desktop:flex-row gap-[2%] justify-center mx-[2%] mt-[1%]">
        <CardProject 
        v-for="(project, index) in projectList" 
        :key="index" 
        :project="project"/>
        
      </div>
      <RouterLink to="/projects"><p class="underline text-right mr-[4%]">Voir plus...</p></RouterLink>
    </section>

    <section class="mt-[4%]">
      <h3 class="text-5xl font-Primary font-bold text-primary-color ml-[2%] mb-[1%]">Des retours satisfaisants</h3>
      <CarouselFeedback :feedbacks="feedbackList"/>
    </section>

    <section class="grid desktop:grid-cols-2 items-center gap-[2%] mx-[6%]">
      <FAQ 
      question1="Pourquoi me choisir pour votre projet digital ?"
      reponse1="Jeune professionnel motivé, toujours en quête de nouvelles expériences et compétences. Passionné par l’univers digital depuis mon plus jeune âge, j’ai exploré divers domaines tout en restant ancré dans le web et la communication digitale. Rigoureux, organisé et soucieux du détail, je mets tout en œuvre pour mener à bien chacun de vos projets digitaux avec précision et efficacité."
      
      question2="Comment se déroule une collaboration avec moi ?"
      reponse2="Derrière chaque stratégie digitale se cachent de nombreux métiers spécialisés. Bien que je ne sois pas expert dans chacun d’eux, je collabore avec des partenaires de confiance, comme Dany Galmiche pour la création d’univers graphiques. Mon expertise se concentre sur la création de sites internet, l’optimisation SEO, le référencement et la gestion des réseaux sociaux, garantissant ainsi une approche complète et performante pour votre visibilité en ligne."
      
      question3="Quels sont mes engagements envers mes clients ?"
      reponse3="Au-delà d’une simple prestation, je construis une véritable relation de confiance avec mes clients. Mon objectif n’est pas seulement d’améliorer leur visibilité en ligne, mais aussi de les accompagner tout au long du projet. J’aime partager mon expertise et les aider à mieux comprendre les enjeux du digital. Cette approche collaborative crée une alchimie parfaite pour atteindre des résultats optimaux."/>
    
      <div class="grid items-center gap-x-5">
        <div class="h-1/2 -mb-[20%]">
          <img src="/imgs/envato/FAQ1.jpg" alt="" class="rounded-xl h-full object-cover object-top w-full items-end">
        </div>
        <div class="grid grid-cols-2 gap-[2%] items-center">
          <img src="/imgs/envato/FAQ2.jpg" alt="" class="rounded-xl w-[500px] h-[250px] object-cover">
          <img src="/imgs/envato/FAQ3.jpg" alt="" class="rounded-xl w-[500px] h-[250px] object-cover">
        </div>
      </div>
    </section>

  </template>
  