<template>
    <section class="">
      <div class="phone:grid phone:grid-cols-1 desktop:flex desktop:flex-row justify-between items-center">
        <div class="phone:col-start-2 desktop:w-2/3 z-10">
          <p class="pl-[4%] relative z-10 font-Secondary text-lg animate__animated animate__fadeInLeft">« C’est en repoussant ses limites que l’on découvre qui l’on est vraiment. » Cette citation me définit parfaitement. Je suis fermement convaincu que sortir de sa zone de confort est essentiel pour évoluer constamment, et c'est cette philosophie qui guide ma carrière. <br /> <br /> Abandonner n'a jamais fait partie de mon vocabulaire. Bien que j'aie récemment obtenu mon diplôme de BUT MMI spécialisé en développement web et dispositif interactif, je ne cesse de chercher à apprendre et à me perfectionner. Je poursuis activement diverses formations dans les domaines de l'IT, du design, de la communication, du management, du commerce, et plus récemment, de la comptabilité.</p>
          <img src="/imgs/shapes/Blob.svg" alt="" class="absolute z-0 left-0 phone:top-[10%] desktop:top-[45%] opacity-50">
          <div class="phone:grid phone:grid-cols-2 desktop:flex desktop:justify-center desktop:gap-10 mt-[2%] items-center">
            <div class="flex gap-4 items-center phone:px-[10%] desktop:px-0">
              <img src="/icons/about/house.svg" alt="" class="w-[32px]">
              <p class="text-primary-color font-extrabold text-2xl">|</p>
              <p class="phone:text-xs desktop:text-base font-Secondary">Montbéliard, 25200 Doubs, France</p>
            </div>
            <div class="flex gap-4 items-center phone:px-[10%] desktop:px-0">
              <img src="/icons/about/calendar.svg" alt="" class="w-[32px]">
              <p class="text-primary-color font-extrabold text-2xl">|</p>
              <p class="phone:text-xs desktop:text-base font-Secondary">23 ans</p>
            </div>

            <NuxtLink to="contact" class="phone:ml-[4%] desktop:ml-0">
              <button class="phone:mt-[10%] desktop:mt-[2%] flex justify-between bg-primary-color rounded-2xl items-center px-[10px] py-[2px] border-2 border-primary-color group hover:bg-light-color hover:flex-row-reverse">
                <p class="uppercase font-Primary font-bold text-light-color group-hover:text-primary-color">me contacter</p>
              </button>
            </NuxtLink>

            <a href="/CV-FR-Marwin_RODRIGUES-MEDIUM_QUALITY.pdf" target="_blank">
              <button class="phone:mt-[10%] desktop:mt-[2%] bg-light-color rounded-2xl items-center px-[10px] py-[6px] border-2 border-primary-color group hover:bg-primary-color">
                <p class="uppercase font-Primary text-center font-bold text-primary-color group-hover:text-light-color">voir mon cv</p>
              </button>
            </a>

          </div>
        </div>

        <div class="phone:col-start-1 desktop:flex desktop:justify-end desktop:pr-[4%]">
          <img src="/imgs/Marwin/About_Me.png" alt="">
        </div>
      </div>
    </section>

    <img src="/imgs/shapes/waves.svg" alt="" class="w-full -mt-[16%] mb-0">
    <section class="-mt-[1px] -mb-[1px] bg-[#2C3236]">
      <competences />
    </section>
    <img src="/imgs/shapes/waves.svg" alt="" class="w-full rotate-180">

    <section id="Cursus" class="mt-4 shadow-lg shadow-jaune pb-4 z-10 flex justify-center">

      <div class="container pt-5">
      <div class="desktop:flex phone:grid justify-center gap-52">


        <!-- SCOLAIRE -->
        <div class="wow fadeInRight desktop:w-1/3">
          <h2 class="fw-normal font-swap desktop:text-lg">Scolaire</h2>
          <ul class="timeline mt-4 pr-md-5">
            <li>
              <div class="title">09/2021 à 08/2024</div>
              <div class="details">
                <h5>BUT MMI</h5>
                <small class="fg-theme">mmi montbéliard</small>
                <p>Formation aux métiers du web, spécialité <b>Développement Web & dispositifs intéractifs</b></p>
              </div>
              <div class="text-center wow fadeInUp mb-2">
                <a href="https://marwin-rodrigues.fr/MMI/" target="_blank" class="btn btn-theme hover:underline hover:animate-pulse">Projets Réalisés en MMI</a>
              </div>
            </li>
            <li>
              <div class="title">09/2020 à 06/2021</div>
              <div class="details">
                <h5>BTS SIO</h5>
                <small class="fg-theme">Lycée Condorcet, Belfort</small>
                <p>Formé en Informatique en alternance, spécialité <br /> <b>SLAM</b> (Solution Logiciel, Application et Maintenance)</p>
              </div>
            </li>
            <li>
              <div class="title">09/2017 à 07/2020</div>
              <div class="details">
                <h5>BAC STI2D</h5>
                <small class="fg-theme">Lycée Germaine Tillion, Montbéliard</small>
                <p>Baccalauréat mention assez bien, spécialité <b>SIN</b> (Système d'Information et Numérique)</p>
              </div>
            </li>
          </ul>
        </div>

        <!-- PRO -->
        <div class="col-md-6 wow fadeInRight desktop:w-1/3" data-wow-delay="200ms">
          <h2 class="fw-normal font-swap desktop:text-lg">Professionel</h2>
          <ul class="timeline mt-4 pr-md-5">
            <li>
              <div class="title">09/2023 à aujourd'hui</div>
              <div class="details">
                <h5><b>Responsable Développement Web & Responsable Communication</b></h5>
                <small class="fg-theme">Jadyss</small>
                <p>Responsable de 2 équipes multi-activités</p>
              </div>
            </li>
            <li>
              <div class="title">05/2023 à aujourd'hui</div>
              <div class="details">
                <h5><b>Web Developper Freelancer</b></h5>
                <small class="fg-theme">Chez Marwin Web</small>
                <p>Création d'une entreprise individuelle spécialisée dans les services web, offrant des compétences en communication digitale, développement web, design web et audiovisuel</p>
              </div>
            </li>
            <li>
              <div class="title">09/2022 à 08/2024</div>
              <div class="details">
                <h5><b>Web developper apprentice</b></h5>
                <small class="fg-theme">Forvia</small>
                <p>Alternance chez Forvia en tant que Développeur Web, avec pour responsabilité la création d'applications web en utilisant des outils tels que Microsoft Power, AngularJS et .NET. J'ai également assumé les rôles de Chef de Projet, Analyste UX/UI, Webdesigner et Vidéaste lors de certaines missions</p>
              </div>
            </li>
            <li>
              <div class="title">08/2021 à 03/2024</div>
              <div class="details">
                <h5><b>Arbitrage évennementiel & CM</b></h5>
                <small class="fg-theme">Ekalia</small>
                <p>Expérience en tant qu'Arbitre Événementiel et Community Manager au sein de l'association Ekalia, organisatrice d'événements de jeux vidéo en ligne, conformément à la loi 1901</p>
              </div>
            </li>
            <li>
              <div class="title">09/2020 à 06/2021</div>
              <div class="details">
                <h5><b>Pilote Système d'Informations</b></h5>
                <small class="fg-theme">Stellantis</small>
                <p>Une année d alternance chez Stellantis en tant que Pilote Système d'Information, avec pour responsabilité la création de fichiers Excel comportant des macros développées en VBA</p>
              </div>
            </li>
            <li>
              <div class="title">09/2020 à Aujourd'hui</div>
              <div class="details">
                <h5><b>Initiation d’adolescent à la programmation</b></h5>
                <p>Encadrement et initiation à la programmation pour des groupes d'adolescents âgés d'environ 13 ans</p>
              </div>
            </li>
            <li>
              <div class="title">07/2019 à 07/2021</div>
              <div class="details">
                <h5><b>Modérateur, Gérant Statistiques et Suggestions et UI Designer</b></h5>
                <small class="fg-theme">Ezaly</small>
                <p>Gestion de micro-événements(2h), des statistiques, des suggestions des utilisateurs ainsi que designer l'ensemble des interface</p>
              </div>
            </li>
          </ul>
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