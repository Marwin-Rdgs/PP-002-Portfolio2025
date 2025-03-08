<template>
    <section class="relative h-full pt-[6%] flex flex-col items-center">
      <!-- Texte bien au-dessus -->
      <h1 class="text-center text-dark-color phone:text-4xl desktop:text-6xl font-Primary font-bold mx-[20%] z-10">
        Je suis <span class="font-extrabold text-primary-color">Marwin</span>. 
        Chef de projet & Indépendant en Stratégie Digitale
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

    <section class="desktop:flex desktop:justify-center phone:grid phone:gap-[4%] desktop:gap-0 mt-[15%]">
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
    </section>

    <section class="desktop:mt-[4%] phone:mt-[15%]">
      <h1 class="text-5xl font-Primary font-bold text-primary-color ml-[2%]">Mon dernier projet</h1>

      <!-- <div class="grid desktop:grid-cols-2 ml-[2%] mt-[4%] group desktop:border-2 border-opacity-0 border-dark-color desktop:hover:border-2 desktop:hover:border-opacity-10 desktop:rounded-xl transition-all ease-in-out duration-300">
        <img src="/imgs/projects/emorphoz.gif" alt="" class="grayscale group-hover:grayscale-0 transition-all ease-in-out duration-300 rounded-xl">
        <div class="grid">
          <h2 class="text-primary-color font-Primary font-semibold text-4xl">E-morphoz</h2>
          <p class="text-lg text-dark-color font-Secondary font-medium desktop:w-4/5">E-morphoz est un générateur de NFT collaboratif où vous participez à la création de votre NFT en y ajoutant des accessoires. La température extérieure d’où vous êtes influe aussi sur le rendu final de la NFT. Une fois généré, une partie des bénéfices de la NFT vous sera reversée à vous et à une association à chaque revente.</p>
          <RouterLink to="/projects/emorphoz"><button class="bg-primary-color text-dark-color rounded-full desktop:px-[24px] phone:px-[10px] phone:text-sm desktop:text-lg py-[1%] text-center font-Primary font-bold drop-shadow-lg hover:scale-110 hover:translate-x-6 hover:shadow-secondary-color hover:shadow-lg transition-all ease-in-out duration-500">Voir plus</button></RouterLink>
        </div>
      </div> -->
      <div class="bg-[url(/imgs/projects/emorphoz.gif)] bg-cover bg-bottom mt-[4%] h-[100%]">
        <div class="grid items-center bg-light-color bg-opacity-5 rounded-r-full w-[50%] pl-[2%] pr-[4%] pt-[4%] h-[500px]">
          <h2 class="text-5xl font-Primary font-bold text-primary-color">E-morphoz</h2>
          <p class="text-lg font-Secondary font-medium text-light-color">E-morphoz est un générateur de NFT collaboratif où vous participez à la création de votre NFT en y ajoutant des accessoires. La température extérieure d’où vous êtes influe aussi sur le rendu final de la NFT. Une fois généré, une partie des bénéfices de la NFT vous sera reversée à vous et à une association à chaque revente.</p>
          <RouterLink to="/projects/emorphoz"><button class="bg-primary-color text-dark-color rounded-full desktop:px-[24px] phone:px-[10px] phone:text-sm desktop:text-lg py-[1%] text-center font-Primary font-bold drop-shadow-lg hover:scale-110 hover:translate-x-6 hover:shadow-secondary-color hover:shadow-lg transition-all ease-in-out duration-500">Voir plus</button></RouterLink>
        </div>
      </div>
      <div class="desktop:flex desktop:gap-2">
        <CardProject />
      </div>
      <RouterLink to="/projects"><p class="underline text-right">Voir plus...</p></RouterLink>
      
      <p class="mt-16">list des derniers projets</p>
      <p>voir plus...</p>
    </section>

    <section>
      <h1>Vos retours</h1>
    </section>

    <section>
      <h1>FAQ</h1>
    </section>

  </template>
  