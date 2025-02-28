<template>
    <section class="relative h-full pt-[6%] flex flex-col items-center">
      <!-- Texte bien au-dessus -->
      <h1 class="text-center text-dark-color phone:text-4xl desktop:text-6xl font-Primary font-bold mx-[20%] z-10">
        Je suis <span class="font-extrabold text-primary-color">Marwin</span>. 
        Chef de projet & Indépendant en Stratégie Digitale
      </h1>
  
      <!-- Image en dessous mais sans casser la mise en page -->
      <div class="flex justify-center -mt-[18%]">
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
            <RouterLink to="/contact"><button class="bg-light-color rounded-full desktop:px-[64px] phone:px-[10px] phone:text-sm desktop:text-lg py-[4%] text-center font-Primary font-bold drop-shadow-lg hover:scale-110 hover:-translate-y-2 hover:shadow-secondary-color hover:shadow-lg transition-all ease-in-out">Me contacter</button></RouterLink>
            <RouterLink to="/contact"><button class="bg-light-color rounded-full desktop:px-[64px] phone:px-[10px] phone:text-sm desktop:text-lg py-[4%] text-center font-Primary font-bold drop-shadow-lg hover:scale-110 hover:-translate-y-2 hover:shadow-secondary-color hover:shadow-lg transition-all ease-in-out">Planifier une visio</button></RouterLink>
          </div>
    </section>

    <section class="grid desktop:grid-cols-2 phone:mt-[60%] desktop:mt-[20%]">
      <div class="grid gap-[8%] ml-[4%]">
        <h3 class="font-Primary font-bold text-dark-color phone:text-2xl desktop:text-5xl">Derrière chaque projet, une histoire. <span class="text-primary-color">Voici la mienne</span>.</h3>
        <p class="font-Secondary text-dark-color desktop:text-lg phone:text-sm">Lorem ipsum dolor sit amet. Et magnam rerum ut numquam eligendi est debitis odit hic inventore Quis hic possimus totam? Sed nobis reprehenderit cum commodi voluptates et dignissimos beatae. Qui tenetur minus aut illo eligendi qui quisquam quia qui nulla nulla est deserunt voluptas in dolores dolor. Aut sapiente itaque id autem beatae aut iste porro ex aspernatur alias.</p>
        <p class="font-Secondary text-dark-color desktop:text-lg phone:text-sm">Lorem ipsum dolor sit amet. Et magnam rerum ut numquam eligendi est debitis odit hic inventore Quis hic possimus totam? Sed nobis reprehenderit cum commodi voluptates et dignissimos beatae. Qui tenetur minus aut illo eligendi qui quisquam quia qui nulla nulla est deserunt voluptas in dolores dolor. Aut sapiente itaque id autem beatae aut iste porro ex aspernatur alias.</p>
        <RouterLink to="/about"><button class="bg-primary-color text-dark-color rounded-full desktop:px-[24px] phone:px-[10px] phone:text-sm desktop:text-lg py-[1%] text-center font-Primary font-bold drop-shadow-lg hover:scale-110 hover:translate-x-6 hover:shadow-secondary-color hover:shadow-lg transition-all ease-in-out">Savoir plus</button></RouterLink>      
      </div>

      <img src="/imgs/Marwin/Marwin-IndexBio.png" alt="">
      
    </section>

  </template>
  