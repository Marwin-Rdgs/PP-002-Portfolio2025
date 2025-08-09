<script setup>
import { ref, computed, onMounted } from 'vue'
import projectListRaw from '@/data/projectList.json';

// 🔍 Sélection du type de prestation (filtre)
const selectedPresta = ref('all');

// 🔁 Projets filtrés selon la prestation sélectionnée et limités à 3
const filteredProjectList = computed(() => {
  let filtered = [...projectListRaw]
    .reverse()
    .filter(project =>
      selectedPresta.value === 'all'
        ? ['web'].includes(project.presta?.toLowerCase())
        : project.presta?.toLowerCase() === selectedPresta.value
    );
  return filtered.slice(0, 3); // Seulement les 3 derniers projets
});
</script>
<template>
    <section class="flex justify-center items-center gap-[2%] mt-[6%] animate-pulse w-[90%] mx-auto">
      <img loading="lazy" src="/imgs/Chez-MarwinUnion/CMW.svg" alt="logo de Chez Marwin Web service de Chez Marwin Union entreprise de Marwin RODRIGUES" class="desktop:w-[128px] phone:w-[64px] animate-fadeIn">
      <h1 class="font-Primary desktop:text-8xl phone:text-2xl text-CMW-primary drop-shadow-lg animate-fadeIn">Chez Marwin-Web</h1>
    </section>
    <div class="mt-[3%] mb-[6%] mx-[10%] phone:gap-y-[1%] desktop:gap-y-[6%] grid">
      <h3 class="text-lg font-Primary font-semibold text-dark-color">Chez Marwin Web, c’est bien plus que de la création de site internet : c’est une aventure humaine fondée sur la collaboration, l’écoute et la confiance.</h3>
      <p class="text-base font-Secondary text-dark-color text-justify">Je conçois chaque projet comme une rencontre entre votre activité, votre histoire, vos objectifs, et mon expertise digitale, ma créativité et mon engagement.</p>
      <p class="text-base font-Secondary text-dark-color text-justify">Spécialisé dans la réalisation de sites web vitrines sur mesure, je vous accompagne de A à Z : de la définition de votre image de marque à la mise en ligne, en passant par la conception graphique, le développement, et même une formation personnalisée pour vous permettre de gérer facilement votre site au quotidien.</p>
      <p class="text-base font-Secondary text-dark-color text-justify">Mais l’accompagnement ne s’arrête pas là : je vous propose également un suivi continu, des prestations de communication digitale (comme la gestion de vos réseaux sociaux) et la création de supports imprimés (cartes de visite, flyers, affiches…), pour renforcer votre visibilité en ligne comme localement..</p>
      <p class="text-base font-Secondary text-dark-color text-justify">Mon objectif est simple : valoriser votre activité, renforcer votre présence sur le web et sur le terrain, et vous aider à convertir davantage de visiteurs en clients.</p>
      <p class="text-base font-Secondary text-dark-color text-justify">Chez Marwin Web, chaque projet est unique, et chaque collaboration est un vrai partenariat. Ensemble, faisons de votre présence digitale un atout fort et humain.</p>
    </div>   

    <section>
    <div class="bg-black text-white py-8">
    <div class="container mx-auto flex flex-col items-start desktop:flex-row my-12 md:my-24">
      <div class="flex flex-col w-full sticky desktop:top-36 desktop:w-1/3 mt-2 desktop:mt-12 px-8">
        <p class="ml-2 text-yellow-300 uppercase tracking-loose">Chez Marwin Web</p>
        <p class="text-2xl desktop:text-3xl leading-normal desktop:leading-relaxed mb-2">L'accompagnement Chez Marwin Web</p>
        <p class="text-sm desktop:text-base text-gray-50 mb-4">
          Vous êtes un artisant, une TPE, PME et vous cherchez à booster votre présence ?
        </p>
        <NuxtLink to="/contact" class="bg-transparent mr-auto hover:bg-yellow-300 text-yellow-300 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent">Contactez-moi</NuxtLink>
      </div>
      <div class="ml-0 md:ml-12 lg:w-2/3 sticky">
        <div class="container mx-auto w-full h-full">
          <div class="relative wrap overflow-hidden p-10 h-full">
            <div class="border-2-2 border-CMW-primary absolute h-full border"
              style="right: 50%; border: 2px solid #BAE0E6; border-radius: 1%;"></div>
            <div class="border-2-2 border-yellow-555 absolute h-full border"
              style="left: 50%; border: 2px solid #BAE0E6; border-radius: 1%;"></div>
            <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div class="order-1 w-5/12"></div>
              <div class="order-1 w-5/12 px-1 py-4 text-right">
                <p class="mb-3 text-base text-yellow-300">Étape 1</p>
                <h4 class="mb-3 font-bold text-lg desktop:text-2xl">Premier contact humain</h4>
                <p class="text-sm desktop:text-base leading-snug text-gray-50 text-opacity-100">
                  Un premier échange par téléphone, mail ou en personne pour vous présenter mes services, découvrir vos besoins et créer un premier lien de confiance. On parle simplement, humainement, sans jargon.
                </p>
              </div>
            </div>
            <div class="mb-8 flex justify-between items-center w-full right-timeline">
              <div class="order-1 w-5/12"></div>
              <div class="order-1  w-5/12 px-1 py-4 text-left">
                <p class="mb-3 text-base text-yellow-300">Étape 2</p>
                <h4 class="mb-3 font-bold text-lg desktop:text-2xl">Rendez-vous de co-construction</h4>
                <p class="text-sm desktop:text-base leading-snug text-gray-50 text-opacity-100">
                  En visio ou en face à face, je vous présente une première maquette personnalisée et une offre claire. Un compte-rendu avec devis vous est ensuite envoyé pour vous laisser le temps de réfléchir sereinement.
                </p>
              </div>
            </div>
            <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div class="order-1 w-5/12"></div>
              <div class="order-1 w-5/12 px-1 py-4 text-right">
                <p class="mb-3 text-base text-yellow-300"> Étape 3</p>
                <h4 class="mb-3 font-bold text-lg desktop:text-2xl">Lancement du projet et suivi</h4>
                <p class="text-sm desktop:text-base leading-snug text-gray-50 text-opacity-100">
                  Après validation, le projet démarre étape par étape : maquette, création, technique,… Vous recevez des suivis réguliers, et une mini-formation vous est proposée pour apprendre à gérer votre site.
                </p>
              </div>
            </div>

            <div class="mb-8 flex justify-between items-center w-full right-timeline">
              <div class="order-1 w-5/12"></div>

              <div class="order-1  w-5/12 px-1 py-4">
                <p class="mb-3 text-base text-yellow-300">Étape 4</p>
                <h4 class="mb-3 font-bold  text-lg desktop:text-2xl text-left">Mise en ligne & accompagnement dans la durée</h4>
                <p class="text-sm desktop:text-base leading-snug text-gray-50 text-opacity-100">
                  Une fois le site publié, je reste à vos côtés avec un suivi annuel : maintenance, mises à jour et évolutions.
                </p>
              </div>
            </div>
          </div>
          <img loading="lazy" class="mx-auto -mt-[5%] w-[256px]" src="/imgs/Chez-MarwinUnion/CMW-Signature.svg" />
        </div>
      </div>
    </div>
  </div>
  </section>

      <!-- Cartes projets filtrées -->
    <section class="mx-[6%]">
    <h3 class="text-5xl font-Primary font-bold text-CMW-primary ml-[2%]">Nos co-créations</h3>
      <div class="grid desktop:grid-cols-3 phone:gap-[4%] desktop:gap-[10%] mx-[10%] mb-[10%] mt-[2%]">
        <CardProject
          class="w-full"
          v-for="(project, index) in filteredProjectList"
          :key="index"
          :project="project"
        />
      </div>
    </section>

        <section class="grid desktop:grid-cols-2 items-center gap-[2%] mx-[6%] phone:mt-[20%] desktop:mt-[4%]">
      <FAQ 
      question1="Est-ce que vous assurez le suivi et la maintenance du site après sa mise en ligne ?"
      reponse1="Absolument. Chez Marwin Web, la création d’un site web ne s’arrête pas à sa mise en ligne. Je propose un véritable accompagnement dans la durée, à travers un abonnement annuel personnalisé. Cela comprend les mises à jour techniques, la maintenance régulière du site, ainsi qu’une disponibilité en cas de besoin pour effectuer des modifications ou des ajustements. Ce suivi fait partie intégrante de ma vision du métier : construire des relations durables et rassurantes avec mes clients, même après la livraison. Vous n’êtes jamais laissé seul face à votre site : je reste à vos côtés."
      
      question2="Faites-vous aussi du graphisme et du print ?"
      reponse2="Oui, tout à fait ! Chez Marwin Web, on ne se limite pas à la création de sites internet. Je peux également vous accompagner dans la conception de votre identité visuelle et de vos supports de communication imprimés : cartes de visite, flyers, affiches, ou tout autre élément graphique dont vous avez besoin. J’ai déjà eu le plaisir de réaliser ce type de prestations pour des clients comme MToutFer ou encore Tony Rodrigues, en leur proposant des solutions graphiques cohérentes et personnalisées. L’objectif est de vous aider à bâtir une image de marque forte et harmonieuse, sur tous les supports."
      
      question3="Proposez-vous des prestations de référencement naturel (SEO) ?"
      reponse3="Oui, le référencement naturel, aussi appelé SEO, fait partie intégrante de mes services lorsque je développe un site internet. Mon objectif est de vous rendre visible sur Google et d’attirer du trafic qualifié vers votre site. J’intègre les bonnes pratiques SEO dès la conception : structure optimisée, mots-clés pertinents, performance technique, et bien plus encore. J’utilise également des outils basés sur l’intelligence artificielle pour affiner la stratégie de contenu, maximiser la conversion et améliorer la visibilité de votre activité sur le web. Pour moi, un site sans stratégie SEO, c’est comme un beau magasin sans vitrine : il mérite d’être vu, et bien positionné !"/>
    
      <div class="grid items-center gap-x-5">
        <div class="h-full -mb-[20%]">
          <img loading="lazy" src="/imgs/envato/FAQ6.jpg" alt="Image d'exemple de FAQ" class="rounded-xl h-full object-cover object-top w-full items-end">
        </div>
      </div>
    </section>
</template>