<script setup>
import {ref} from 'vue';
import CarouselFeedback from '@/components/CarouselFeedback.vue';
import feedbackListRaw from '@/Data/feedbackIndex.json'
import projectListRaw from '@/data/projectList.json'

const avis = ref(1);

const feedbackList = ref(feedbackListRaw);
const projectList = ref(projectListRaw.slice(-5, -1).reverse());
</script>

<template>
    <section class="relative h-full pt-[6%] flex flex-col items-center">
      <!-- Texte bien au-dessus -->
      <h1 class="text-center text-dark-color phone:text-4xl desktop:text-6xl font-Primary font-bold mx-[20%] z-10">
        Je suis <span class="font-extrabold text-primary-color">Marwin</span>. 
        Chef de projet & Entrepreneur.
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
            <RouterLink to="/contact"><button class="bg-light-color rounded-full desktop:px-[64px] phone:px-[10px] phone:text-sm desktop:text-lg py-[4%] text-center font-Primary font-bold drop-shadow-lg hover:scale-110 hover:-translate-y-2 hover:shadow-secondary-color hover:shadow-lg transition-all ease-in-out duration-300">Planifier une visio</button></RouterLink>
          </div>
    </section>

    <section class="relative grid desktop:grid-cols-2 phone:mt-[60%] desktop:mt-[20%]">
      <div class="grid gap-[6%] ml-[4%]">
        <h3 class="font-Primary font-bold text-dark-color phone:text-2xl desktop:text-5xl">Derrière chaque projet, une histoire. <span class="text-primary-color">Voici la mienne</span>.</h3>
        <p class="font-Secondary text-dark-color desktop:text-lg phone:text-sm">Passionné par le digital depuis le collège, je me suis construit un parcours riche et hybride mêlant développement web, design, communication, gestion de projet et entrepreneuriat. Mon but ? Allier la technique à une vision stratégique pour concevoir des projets ambitieux et utiles. Curieux et déterminé, je multiplie les expériences – en entreprise, en freelance ou via mes projets personnels – avec un seul objectif : apprendre chaque jour quelque chose de nouveau.</p>
        <p class="font-Secondary text-dark-color desktop:text-lg phone:text-sm">Toujours prêt à relever de nouveaux défis, je poursuis aujourd’hui ma montée en compétences avec de grandes ambitions professionnelles et personnelles. Repousser mes limites, me challenger, évoluer constamment : voilà ce qui me motive. Si tu veux en savoir plus sur mon parcours, mes objectifs ou ce qui m’anime au quotidien…</p>
        <RouterLink to="/about"><button class="bg-primary-color text-dark-color rounded-full desktop:px-[24px] phone:px-[10px] phone:text-sm desktop:text-lg py-[1%] text-center font-Primary font-bold drop-shadow-lg hover:scale-110 hover:translate-x-6 hover:shadow-secondary-color hover:shadow-lg transition-all ease-in-out duration-500">Savoir plus</button></RouterLink>      
      </div>

      <img src="/imgs/Marwin/Marwin-IndexBio.png" alt="" class=" desktop:absolute desktop:right-0 desktop:-top-64 object-cover z-0">
      
    </section>

    <!-- <section class="desktop:flex desktop:justify-center phone:grid phone:gap-[4%] desktop:gap-0 mt-[15%]">
      <div class="desktop:w-[45%] bg-light-color desktop:border-l-2 border-t-2 desktop:border-b-2 border-dark-color border-opacity-10 rounded-l-md phone:h-[536px] desktop:h-[500px]">
        <h1 class="text-primary-color font-Primary text-center text-2xl font-bold desktop:mt-[4%]">Chef de projet</h1>
        <ul class="grid gap-[4%] text-md ml-[2%] mt-[2%]">
          <li>Pilotage et coordination de projets dans divers secteurs.</li>
          <li>Définition et suivi des objectifs en fonction des enjeux stratégiques et opérationnels</li>
          <li>Gestion du cycle de vie des produits/services, de la conception à la mise en marché</li>
          <li>Collaboration avec les équipes techniques, créatives et métiers pour assurer l’alignement stratégique</li>
          <li>Mise en place et gestion des méthodologies de travail (agilité, cycle en V,gestion classique, workflows créatifs)</li>
          <li>Analyse des besoins et des tendances du marché pour optimiser les offres et expériences</li>
          <li>Organisation et gestion d’événements (lancements, activations de marque, productions audiovisuelles...)</li>
          <li>Gestion des parties prenantes et coordination des intervenants (clients, prestataires, équipes internes)</li>
        </ul>
      </div>
      <div class="desktop:w-[45%] bg-primary-color rounded-r-md h-[500px]">
        <h1 class="text-light-color font-Primary text-center text-2xl font-bold desktop:mt-[4%]">Indépendant en Stratégie Digital</h1>
        <ul class="grid phone:gap-[4%] desktop:gap-[14%] text-md ml-[2%] mt-[2%]">
          <li>Création et refonte de sites vitrines ergonomiques et optimisés SEO</li>
          <li>Stratégie et gestion des réseaux sociaux : contenu, engagement, publicité</li>
          <li>Conception de supports de communication (print & digital) : cartes de visite, flyers, brochures...</li>
          <li>Mise en place et analyse des campagnes marketing digital (emailing, ads, référencement)</li>
          <li>Accompagnement des marques dans leur digitalisation et positionnement en ligne</li>
          <li>Formation et conseils personnalisés pour aider les entreprises et particuliers à mieux gérer leur communication digitale</li>
          <li>Optimisation du parcours utilisateur pour maximiser le taux de conversion</li>
        </ul>
      </div>
    </section> -->

    <section class="desktop:mt-[10%] phone:mt-[20%]">
      <h3 class="text-5xl font-Primary font-bold text-primary-color ml-[2%]">Mon dernier projet</h3>

      <div class="bg-[url(/imgs/projects/ilMago.gif)] bg-cover bg-center mt-[1%] h-[100%]">
        <div class="grid items-center bg-light-color bg-opacity-5 rounded-r-full w-[50%] pl-[2%] pr-[4%] pt-[4%] h-[500px]">
          <h2 class="text-5xl font-Primary font-bold text-primary-color">ilMago</h2>
          <p class="text-lg font-Secondary font-medium text-light-color">Site promotionnel du DJ et producteur de Hardstyle Strasbourgeois</p>
          <RouterLink to="/projects/PC2025003"><button class="bg-primary-color text-dark-color rounded-full desktop:px-[24px] phone:px-[10px] phone:text-sm desktop:text-lg py-[1%] text-center font-Primary font-bold drop-shadow-lg hover:scale-110 hover:translate-x-6 hover:shadow-secondary-color hover:shadow-lg transition-all ease-in-out duration-500">Voir plus</button></RouterLink>
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

    <section class="grid desktop:grid-cols-2 items-center gap-[2%] desktop:ml-[6%] mr-[6%]">
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
  