<script setup>
import {ref} from 'vue';

const avis = ref(1);
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
      <div class="grid gap-[8%] ml-[4%]">
        <h3 class="font-Primary font-bold text-dark-color phone:text-2xl desktop:text-5xl">Derrière chaque projet, une histoire. <span class="text-primary-color">Voici la mienne</span>.</h3>
        <p class="font-Secondary text-dark-color desktop:text-lg phone:text-sm">Lorem ipsum dolor sit amet. Et magnam rerum ut numquam eligendi est debitis odit hic inventore Quis hic possimus totam? Sed nobis reprehenderit cum commodi voluptates et dignissimos beatae. Qui tenetur minus aut illo eligendi qui quisquam quia qui nulla nulla est deserunt voluptas in dolores dolor. Aut sapiente itaque id autem beatae aut iste porro ex aspernatur alias.</p>
        <p class="font-Secondary text-dark-color desktop:text-lg phone:text-sm">Lorem ipsum dolor sit amet. Et magnam rerum ut numquam eligendi est debitis odit hic inventore Quis hic possimus totam? Sed nobis reprehenderit cum commodi voluptates et dignissimos beatae. Qui tenetur minus aut illo eligendi qui quisquam quia qui nulla nulla est deserunt voluptas in dolores dolor. Aut sapiente itaque id autem beatae aut iste porro ex aspernatur alias.</p>
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
      <h1 class="text-5xl font-Primary font-bold text-primary-color ml-[2%]">Mon dernier projet</h1>

      <div class="bg-[url(/imgs/projects/iutNFCTV.gif)] bg-cover bg-center mt-[1%] h-[100%]">
        <div class="grid items-center bg-light-color bg-opacity-5 rounded-r-full w-[50%] pl-[2%] pr-[4%] pt-[4%] h-[500px]">
          <h2 class="text-5xl font-Primary font-bold text-primary-color">iut NFC tv</h2>
          <p class="text-lg font-Secondary font-medium text-light-color">Site répertoriant l’ensemble des contenus multimédias de l’Institut Universitaire et Technologique de Nord Franche-Comté.</p>
          <RouterLink to="/projects/iutnfctv"><button class="bg-primary-color text-dark-color rounded-full desktop:px-[24px] phone:px-[10px] phone:text-sm desktop:text-lg py-[1%] text-center font-Primary font-bold drop-shadow-lg hover:scale-110 hover:translate-x-6 hover:shadow-secondary-color hover:shadow-lg transition-all ease-in-out duration-500">Voir plus</button></RouterLink>
        </div>
      </div>
      <div class="desktop:flex phone:flex-col desktop:flex-row gap-[2%] justify-center mx-[2%] mt-[1%]">
        <CardProject title="Flyer - Tony RODRIGUES" img="/imgs/projects/Com-Tony.jpeg" alt="projet"/>
        <CardProject title="Carte de visite - MToutFer" img="/imgs/projects/Com-MToutFer.jpeg" alt="projet"/>
        <CardProject title="Flyer - Devred 1902" img="/imgs/projects/Com-Devred.jpeg" alt="projet"/>
        <CardProject title="GoMatch" img="/imgs/projects/gomatch.gif" alt="projet"/>
      </div>
      <RouterLink to="/projects"><p class="underline text-right">Voir plus...</p></RouterLink>
    </section>

    <section class="mt-[4%]">
      <h1 class="text-5xl font-Primary font-bold text-primary-color ml-[2%] mb-[1%]">Des retours satisfaisants</h1>
      <div class="grid desktop:grid-cols-2 phone:gap-[8%] desktop:gap-[2%] desktop:mx-[2%] relative">
        <feedback v-if="avis==1" nom="Pascal Chatonnay" poste="Chef de département" secteur="MMI Montbéliard" link="#" img="/imgs/retours/pascal-chatonnay.jpg" alt="test" comments="Marwin s'est distingué par son implication et son enthousiasme. Son engagement en alternance chez Forvia lui a permis de développer un savoir-faire technique solide, tout en appliquant de manière pratique les compétences acquises au département MMI de Montbéliard. Sa capacité à jongler entre les exigences académiques et professionnelles témoigne de sa rigueur, de son sens de l'organisation et de sa passion pour le développement tout en étant à l'aise avec la communication et le design. Outre ses compétences professionnelles, Marwin est toujours d'une compagne agréable."/>
        <feedback v-if="avis==1" nom="Andréa Lopes" poste="Chef de projet" secteur="FORVIA" link="#" img="/imgs/retours/andrea-lopes.jpeg" alt="test" comments="Marwin a été mon alternant entre septembre 2022 et août 2024 au sein de Forvia. Il a été très efficace et a su prendre en compte les conseils et remarques tout au long de cette période, il a beaucoup évolué et est aujourd'hui plus que jamais prêt à relever des defis. Très polyvalent et toujours volontaire, il sera une force pour votre entreprise"/>
       
        <feedback v-if="avis==2" nom="Johan Grandmougin" poste="Directeur Commercial" secteur="ChooseMe" link="#" img="/imgs/retours/johan-grandmougin.jpg" alt="test" comments="Nous avons demandé à Marwin de créer notre projets, Nous lui avons expliqué ce que nous voulions, il a été à l'écoute, nous a poser des questions, ensuite il se projetait en incluant des options auxquels nous avions pas pansé ce qui répondait à nos attentes de plus améliorait de notre projet et nous lui avons approuvé le prototype. Nous sommes content de Marwin."/>
        <feedback v-if="avis==2" nom="Julien Vissault" poste="Administrateur" secteur="Jadyss" link="#" img="/imgs/retours/julien-vissault.jpeg" alt="test" comments="Marwin est très professionnel dans son travail, on lui a confié la responsabilité du projet de développement de notre site internet. Nous sommes entièrement satisfait sur tous les aspects de ce projet que ce soit sur la partie technique ou gestion de projet."/>
       
        <feedback v-if="avis==3" nom="Dany Galmiche" poste="Indépendant en création numérique" secteur="Dany Galmiche Design" link="#" img="/imgs/retours/dany-galmiche.jpeg" alt="test" comments="Efficace et professionnel c'est un très bon collaborateur."/>
        <feedback v-if="avis==3" nom="Antoine Beluche" poste="Indépendant en débaras" secteur="MTFer" link="#" img="/imgs/retours/antoine-beluche.jpg" alt="test" comments="Marwin a été très compétent et il a répondu à mes attentes qui m'ont permis de me concentrer totalement sur mon activité d'auto-entreprise."/>       
        <div class="absolute z-20 flex justify-between w-full items-center h-full">
          <button @click="avis-=1;if(avis<1){avis=3}"><img src="/icons/chevron.svg" alt="" class="w-[64px] rotate-90 scale-100 hover:scale-110 ease-in-out duration-150 transition-all"></button>
          <button @click="avis+=1;if(avis>3){avis=1}"><img src="/icons/chevron.svg" alt="" class="w-[64px] -rotate-90 scale-100 hover:scale-110 ease-in-out duration-150 transition-all"></button>
        </div>
      </div>
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
  