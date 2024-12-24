<template>
    <h1>Page A Propos (+ contact & prise de rdv)</h1>
    <NuxtLink to="/">Page Accueil</NuxtLink>


    <section class="mt-[10%]">
      <div class="phone:grid phone:grid-cols-1 desktop:flex desktop:flex-row justify-between items-center">
        <div class="phone:col-start-2 desktop:w-2/3">
          <p class="pl-[4%] relative z-10 font-Secondary text-lg">« C’est en repoussant ses limites que l’on découvre qui l’on est vraiment. » Cette citation me définit parfaitement. Je suis fermement convaincu que sortir de sa zone de confort est essentiel pour évoluer constamment, et c'est cette philosophie qui guide ma carrière. <br /> <br /> Abandonner n'a jamais fait partie de mon vocabulaire. Bien que j'aie récemment obtenu mon diplôme de BUT MMI spécialisé en développement web et dispositif interactif, je ne cesse de chercher à apprendre et à me perfectionner. Je poursuis activement diverses formations dans les domaines de l'IT, du design, de la communication, du management, du commerce, et plus récemment, de la comptabilité.</p>
          <img src="/icons/Blob.svg" alt="" class="absolute z-0 left-0 phone:top-[10%] desktop:top-[45%] opacity-50">
          <div class="phone:grid phone:grid-cols-2 desktop:flex desktop:justify-center desktop:gap-10 mt-[2%]">
            <div class="flex gap-4 items-center">
              <img src="/icons/house.svg" alt="" class="w-[32px]">
              <p class="text-primary-color font-extrabold text-2xl">|</p>
              <p class="phone:text-xs desktop:text-base font-Secondary">Montbéliard, 25200 Doubs, France</p>
            </div>
            <div class="flex gap-4 items-center">
              <img src="/icons/calendar.svg" alt="" class="w-[32px]">
              <p class="text-primary-color font-extrabold text-2xl">|</p>
              <p class="phone:text-xs desktop:text-base font-Secondary">23 ans</p>
            </div>

            <NuxtLink to="contact">
              <button class="phone:mt-[10%] desktop:mt-[2%] flex justify-between bg-primary-color rounded-2xl items-center px-[10px] py-[2px] border-2 border-primary-color group hover:bg-light-color hover:flex-row-reverse">
                <img src="/icons/arrow_right.svg" alt="" class="fill-light-color text-light-color w-[32px] group-hover:fill-primary-color group-hover:text-primary-color">
                <p class="uppercase font-Primary font-bold text-light-color group-hover:text-primary-color">me contacter</p>
              </button>
            </NuxtLink>

            <NuxtLink to="contact">
              <button class="phone:mt-[10%] desktop:mt-[2%] bg-light-color rounded-2xl items-center px-[10px] py-[6px] border-2 border-primary-color group hover:bg-primary-color">
                <p class="uppercase font-Primary text-center font-bold text-primary-color group-hover:text-light-color">voir mon cv</p>
              </button>
            </NuxtLink>

          </div>
        </div>

        <div class="phone:col-start-1 desktop:flex desktop:justify-end desktop:pr-[4%]">
          <img src="/imgs/Marwin/About_Me.png" alt="">
        </div>
      </div>
    </section>

    <section class="phone:mt-10 desktop:mt-60">

    <div class="flex justify-center relative">
    <div class="desktop:grid desktop:grid-cols-2 mt-10 list-item items-center ml-[4%]">
      <div class="grid-cols-2 desktop:ml-11 z-20">
        <h2 class="desktop:text-lg phone:ml-2 desktop:ml-0 font-Primary" >Marwin RODRIGUES</h2>
        <h3 class="desktop:text-base text-primary-color phone:ml-2 desktop:ml-0 font-Primary">WebMaster Junior</h3>
        <p class="desktop:text-3xs phone:text-5xs text-opacity-75 mt-4 deskstop:w-4/12 phone:ml-2 desktop:ml-0 font-Secondary">Fraichement Diplômé d’un BUT MMI à <a href="https://www.linkedin.com/school/mmimontbeliard/?originalSubdomain=fr" target="_blank"><span class="text-primary-color hover:underline hover:animate-pulse"> MMI Montbéliard </span></a>, je possède une expertise en développement web, communication digital & print, UX/UI, et programmation de jeux vidéo. Déterminé à évoluer en tant que développeur front-end, mon objectif est d'atteindre le poste de directeur de projet web. Motivé et prêt à contribuer à des projets web de haut niveau.</p>
        <ul class="theme-list mt-5 phone:ml-2 desktop:ml-0 font-Secondary">
            <li><b>Réside:</b> Montbéliard, FR</li>
            <li><b>Age:</b> 23</li>
            <li><b>Né:</b> 19/03/2001</li>
            <li><b>Contact: </b> <a href="mailto:contact@marwin-rodrigues.fr" class="text-primary-color hover:underline hover:animate-pulse">contact@marwin-rodrigues.fr</a></li>
          </ul>
          <div class="desktop:flex desktop:justify-center phone:ml-2 desktop:ml-0 desktop:w-1/2 mt-4">
          <a href="../../assets/CV-FR-FD_Marwin-RODRIGUES.pdf" target="_blank"><button class="rounded-full border-2 border-primary-color px-2 py-1 hover:bg-primary-color hover:text-light-color hover:scale-110 duration-300 font-Primary">Voir mon CV</button></a>
          </div>
      </div>

      </div>
    </div>

  </section>


</template>

<style>
 /* LIST */
 .theme-list {
    position: relative;
    padding-left: 30px;
    list-style: none;
    z-index: 10;
}

.theme-list::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 9px;
    margin: auto;
    width: 1px;
    height: 85%;
    background-color: #f0a500;
    z-index: -1;
}

.theme-list li {
    display: block;
    margin: 5px 0;
}

.theme-list li::before {
    content: "";
    position: absolute;
    left: 3px;
    margin: 6px 0;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #fff;
    border: 3px solid #f0a500;
}

/* CURSUS */
.timeline {
  position: relative;
  list-style: none;
  padding-left: 0;
}

.timeline::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 2px;
  height: 95%;
  background-color: #f0a500;
}

.timeline li {
  position: relative;
  display: block;
  padding-left: 30px;
  margin-bottom: 20px;
}

.timeline li::before {
  content: '';
  position: absolute;
  top: 8px;
  left: -8px;
  width: 18px;
  height: 18px;
  background-color: #f0a500;
  border: 3px solid #fff;
  border-radius: 50%;
}

.timeline li .title {
  width: 150px;
  padding: 6px 20px;
  color: #fff;
  font-weight: 500;
  background-color: #f0a500;
  border-width: 2px;
  border-color: #000000;
  border-radius: 30px 0 60px 30px;
}

.timeline li .details {
  background-color: #f4f5f8;
  margin-top: 8px;
  padding: 20px;
  border-radius: 4px;
}

.timeline li .details h5,
.timeline li .details p {
  margin-bottom: 0;
}

.timeline li .details small {
  display: block;
  font-weight: 500;
  font-size: 14px;
  margin-top: 5px;
  margin-bottom: 10px;
}
</style>