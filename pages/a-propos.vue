<script setup>
import { ref } from 'vue'
import projectList from '~/data/projectList.json'
import { useHead } from '#imports';

useHead({
  title: "À propos | Marwin Rodrigues - Business Manager & Entrepreneur",
  meta: [
    {
      name: "description",
      content:
        "Marwin Rodrigues – Business Manager & Entrepreneur spécialisé en projets digitaux, management et innovation."
    },
    {
      name: "keywords",
      content:
        "Marwin Rodrigues, Business Manager, Entrepreneur, Projets digitaux, Management, Innovation, CV en ligne, Strasbourg, Bas-rhin, Montbéliard, Doubs, Divonne-les-bains, Ain, Freelance, Chez Marwin Union, Chez Marwin Web, Chez Marwin TeamCare"
    },
    { name: "author", content: "Marwin Rodrigues" },

    // Open Graph
    { property: "og:title", content: "À propos | Marwin Rodrigues - Business Manager & Entrepreneur" },
    {
      property: "og:description",
      content:
        "Parcourez mon profil : Business Manager & Entrepreneur passionné par la gestion de projets digitaux et l'innovation."
    },
    { property: "og:image", content: "https://marwin-rodrigues.fr/imgs/Marwin/About_Me.png" },
    { property: "og:url", content: "https://marwin-rodrigues.fr/a-propos" },
    { property: "og:type", content: "profile" },

    // Twitter Card
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "À propos | Marwin Rodrigues - Business Manager & Entrepreneur" },
    {
      name: "twitter:description",
      content:
        "Marwin Rodrigues – Business Manager & Entrepreneur passionné par le digital, le management et l'innovation."
    },
    { name: "twitter:image", content: "https://marwin-rodrigues.fr/imgs/Marwin/About_Me.png" }
  ],
  link: [
    { rel: "canonical", href: "https://marwin-rodrigues.fr/a-propos" }
  ]
})


const projectCount = projectList.length

const words = ['curieux', 'passion', 'digital', 'humain', 'ambition', 'sociable', 'dynamique', 'polyvalent', 'organisé', 'visionnaire', 'leader', 'entrepreneur', 'structuré', 'demain', 'proactif', 'bienveillance', 'engagé', 'collaboratif', 'co-création', 'union', 'audacieux']

const mouseX = ref(0)
const mouseY = ref(0)
const currentWord = ref('')
const isHovering = ref(false)
let wordInterval = null

const birthDate = new Date('2001-03-19')

// 🔁 Calcul automatique de l'âge
const age = computed(() => {
  const today = new Date()
  let years = today.getFullYear() - birthDate.getFullYear()

  // Corriger si l'anniversaire n’est pas encore passé cette année
  const hasHadBirthday =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate())

  if (!hasHadBirthday) {
    years--
  }

  return years
})

function handleMouseMove(e) {
  const hoverArea = e.currentTarget.getBoundingClientRect()
  mouseX.value = e.clientX - hoverArea.left
  mouseY.value = e.clientY - hoverArea.top
}

function startWords() {
  isHovering.value = true
  updateWord()
  wordInterval = setInterval(updateWord, 900)
}

function stopWords() {
  isHovering.value = false
  clearInterval(wordInterval)
}

function updateWord() {
  const randomIndex = Math.floor(Math.random() * words.length)
  currentWord.value = words[randomIndex]
}
</script>

<template>
    <section aria-label="Hero page d'à propos" class="mt-[6%]">
      <div class="phone:grid phone:grid-cols-1 desktop:flex desktop:flex-row justify-between items-center">

        <div class="phone:col-start-2 desktop:w-1/2 z-10 pl-[4%]">
          <p class="relative z-10 font-Secondary text-lg animate__animated animate__fadeInLeft">« C’est en repoussant ses limites que l’on découvre qui l’on est vraiment. » Cette conviction guide mon parcours. Diplômé d’un BUT MMI spécialisé en développement web et dispositifs interactifs, j’ai enrichi mes compétences techniques et artistiques lors de projets pédagogiques concrets. <br /> <br /> Depuis, je poursuis des formations variées (IT, design, communication, management, commerce, comptabilité) pour bâtir une posture polyvalente et stratégique. Aujourd’hui, mon ambition est claire : quitter le croquis pour piloter des projets, fédérer des équipes et valoriser l’humain au cœur de chaque action – de la conception d’un site à la coordination globale de projets. Mes expériences m’ont préparé à cela : La direction de projets et la création d’entreprise (Chez Marwin Union).</p>
          <img loading="lazy" src="/imgs/shapes/Blob.svg" alt="Icone de fond" class="absolute z-0 left-0 phone:top-[10%] desktop:top-[45%] opacity-50">
          <div class="phone:grid phone:grid-cols-2 desktop:flex desktop:justify-center desktop:gap-10 mt-[2%] items-center">
            <div class="flex gap-4 desktop:w-3/4 items-center phone:px-[10%] desktop:px-0">
              <img loading="lazy" src="/icons/about/house.svg" alt="Icone Maison" class="w-[32px]">
              <p class="text-primary-color font-extrabold text-2xl">|</p>
              <p class="phone:text-sm desktop:text-base font-Secondary">Strasbourg, 67200, France</p>
            </div>
            <div class="flex desktop:w-1/3 gap-4 items-center phone:px-[10%] desktop:px-0">
              <img loading="lazy" src="/icons/about/calendar.svg" alt="Icone Calendrier" class="w-[32px]">
              <p class="text-primary-color font-extrabold text-2xl">|</p>
              <p class="phone:text-lg desktop:text-base font-Secondary">{{ age }} ans</p>
            </div>

            <NuxtLink to="contact" class="phone:ml-[4%] desktop:ml-0 desktop:w-1/2">
              <button class="phone:mt-[10%] desktop:mt-[2%] flex justify-between bg-primary-color rounded-2xl items-center px-[6%] py-[4%] border-2 border-primary-color group hover:bg-light-color hover:flex-row-reverse">
                <p class="uppercase desktop:text-lg font-Primary font-bold text-light-color group-hover:text-primary-color">me contacter</p>
              </button>
            </NuxtLink>

            <!-- <NuxtLink href="/CV-FR-Marwin_RODRIGUES-MEDIUM_QUALITY.pdf" target="_blank" class="desktop:w-1/3">
              <button class="phone:mt-[10%] desktop:mt-[2%] bg-light-color rounded-2xl items-center px-[6%] py-[4%] border-2 border-primary-color group hover:bg-primary-color">
                <p class="uppercase font-Primary text-center font-bold text-primary-color group-hover:text-light-color">voir mon cv</p>
              </button>
            </NuxtLink> -->

          </div>
        </div>

        <div class="phone:col-start-1 desktop:flex desktop:justify-end desktop:pr-[4%] desktop:scale-[145%] desktop:mr-[8%]">
          <img loading="lazy" src="/imgs/Marwin/About_Me.png" alt="Photo de Marwin RODRIGUES">
        </div>
      </div>
    </section>

    <!-- Section Paragraphe -->
    <section aria-label="Histoire de Marwin RODRIGUES"
    ref="hoverArea"
    class="mt-[13%] mx-[4%] relative cursor-none overflow-hidden grid grid-cols-1 desktop:h-[1400px] phone:gap-[1%] desktop:gap-0"
    @mousemove="handleMouseMove"
    @mouseenter="startWords"
    @mouseleave="stopWords">
      <p class="font-Secondary text-base text-dark-color">Il y a des parcours linéaires, tout tracés. Et il y a ceux qui se construisent au fil des passions, des intuitions, des remises en question. Le mien appartient à la seconde catégorie. Un chemin fait de bifurcations volontaires, d’apprentissages intensifs, de projets qui m’ont transformé et de rencontres qui m’ont fait grandir. Je m’appelle Marwin Rodrigues, et depuis mon adolescence, j’ai compris une chose : je ne voulais pas simplement vivre dans un monde digital — je voulais le construire.</p>
      <p class="font-Secondary text-base text-dark-color"><b>Les débuts : de la passion à la vocation</b><br />
      Tout a commencé très tôt. Comme beaucoup de jeunes de ma génération, j’ai grandi entouré d’écrans, de plateformes, de jeux, d’expériences numériques immersives. Mais là où d’autres s’arrêtaient à l’usage, moi, je voulais comprendre. Comment fonctionne un site ? Qu’est-ce qu’une interface bien pensée ? Pourquoi certaines plateformes m’inspirent confiance dès la première seconde ? Je voulais casser le jouet pour voir comment il marchait. Ce désir de comprendre, de créer, de bâtir avec mes mains numériques ne m’a jamais quitté. Adolescent, pendant que d'autres jouaient, je bidouillais. Je commençais à tisser ma toile — sans le savoir encore.</p>
      <p class="font-Secondary text-base text-dark-color"><b>L’autodidaxie et Minecraft : là où tout a commencé</b><br />
      Mon apprentissage s’est d’abord forgé en autodidacte. Grâce à des plateformes comme OpenClassrooms, que je consulte encore aujourd’hui, j’ai appris les bases du développement web, les langages, les méthodes. Mais c’est sur Minecraft que ma créativité et ma rigueur ont véritablement pris forme. Ce jeu bac à sable, où tout est possible, a été une école de vie : j’y ai découvert la construction, la logique via la redstone (l’électricité du jeu), mais aussi la collaboration. Au début, je créais seul dans mon monde virtuel. Puis, rapidement, le besoin de partage s’est imposé. J’ai rejoint des serveurs, discuté avec des joueurs du monde entier, participé à des projets collectifs. Ensemble, nous avons imaginé des univers, combiné nos talents, accueilli des communautés entières autour de nos idées. C’est là que mes premières compétences en gestion de projet, leadership et communication sont nées, bien avant que je mette des mots dessus. Et naturellement, j’ai commencé à lier ces expériences au développement web : création de sites pour nos serveurs, gestion de plateformes communautaires… tout s’imbriquait.</p>
      <p class="font-Secondary text-base text-dark-color"><b>La formation MMI : le point d’ancrage</b><br />
      C’est en intégrant le BUT Métiers du Multimédia et de l’Internet (MMI) que j’ai compris que ma passion pouvait devenir un métier. Pendant trois ans, j’ai pu explorer toutes les facettes de la création numérique : développement, UX/UI, audiovisuel, communication, gestion de projet, design… Et ce que j’ai adoré, c’est la transversalité de cette formation. Je ne voulais pas choisir entre le fond et la forme, entre l’artistique et le technique. J’ai voulu apprendre les deux. Je me suis nourri de chaque projet. Un concept autour du sport connecté, une plateforme NFT, un serveur Minecraft personnalisé, une plateforme de streaming, un système répertoriant les contenus audiovisuels pour l'IUT, lancement de mon auto-entreprise, un talk-show sur scène, ... Chaque sujet était un prétexte pour tester de nouveaux outils, créer en équipe, sortir de ma zone de confort. C’est aussi pendant ces années que j’ai énormément évolué personnellement : j’ai entrepris davantage, j’ai appris à fédérer des équipes, à assumer un rôle de leader. J’ai participé au conseil des étudiants de MMI Montbéliard, apporté ma vision, partagé mes ambitions. J’ai compris une chose essentielle : nous sommes le reflet des personnes qui nous entourent. En m’entourant de profils inspirants, j’ai gagné en maturité, en exigence et en motivation. Je suis convaincu que tout rêve est atteignable, si l’on travaille avec discipline, si l’on sait s’entourer, et si l’on reste aligné avec ses valeurs. Nous vivons dans une génération où tout est à portée de main, à condition d’oser, d’essayer, de rater, de recommencer.</p>
      <p class="font-Secondary text-base text-dark-color"><b>L’humain avant tout</b><br />
      Mais au-delà des lignes de code, une chose m’a toujours guidé : l’humain. Le numérique ne m’intéresse que s’il est utile, intelligent, porteur de sens. J’ai toujours refusé de travailler dans le vide. Il me faut une histoire, une cause, un projet collectif. C’est cette envie de créer des choses concrètes pour des gens réels qui m’a poussé à devenir auto-entrepreneur. Sous le nom de Chez Marwin Union, j’ai accompagné des artisans, des marques, des particuliers dans leur communication digitale : création de sites vitrines, stratégie de contenu, optimisation SEO, refonte de branding, design print. Chaque client était une aventure. J’écoutais, je proposais, je créais. Ce travail en indépendant m’a appris la rigueur, la relation client, la gestion de projet, la négociation, mais aussi l’humilité. Dans cette même logique humaine et collaborative, j’ai lancé un second projet : Chez Marwin TeamCare, un service d’organisation d’événements sur mesure pour les entreprises. Dîners d’équipe, afterworks, team buildings — l’idée était simple : renforcer les liens pour améliorer la cohésion et réduire le turnover. Car soyons honnêtes, travailler dans une entreprise sans bien connaître ses collègues, ce n’est pas très fun ! Ce projet, fondé sur un réseau de partenaires engagés, a vocation à replacer l’humain au cœur de la performance collective. On sous-estime souvent la puissance de l’ambiance de travail : un bon moment partagé, c’est parfois le début d’un grand projet.</p>
      <p class="font-Secondary text-base text-dark-color"><b>Un développeur… mais pas que.</b><br />
      Aujourd’hui, je me définis comme développeur front-end de formation… mais chef de projet dans l’âme. J’aime coder, oui — c’est une forme de poésie logique — mais ce que j’aime encore plus, c’est piloter, réunir, donner du sens. Mon profil technique me permet de comprendre les rouages du développement web, mais ce qui me stimule profondément, c’est de piloter, de fédérer, de donner un cap. C’est à la suite de nombreux entretiens après ma formation MMI que j’ai pris conscience de ma réelle orientation. Sur une dizaine d’échanges professionnels, 8 portaient sur des postes de gestion (chef de projet, product owner, etc.), et tous m’ont renvoyé une image claire : « très bon profil, mais pas assez d’expérience ». Cette répétition m’a poussé à agir : je ne voulais pas attendre que l’opportunité tombe du ciel, j’ai décidé de la créer.</p>
      <p class="font-Secondary text-base text-dark-color"><b>Nouvelle vie à Strasbourg : la transition assumée</b><br />
      C’est ainsi que j’ai entamé une nouvelle aventure à Strasbourg, en intégrant l’ISG Strasbourg en MSc Project Management. Une ville chère à mon cœur, dans laquelle mon frère a vécu plus de 15 ans et qui m’a toujours inspiré. Cette nouvelle étape est à la fois un recommencement et le point de départ d’une grande ambition. En parallèle, j’ai rejoint Agilia Technology, une ESN pas comme les autres. Là où beaucoup d’entreprises de ce type sont perçues comme déshumanisées, Agilia place l’humain au cœur de chaque mission. Leur vision rejoint exactement la mienne : allier performance, bienveillance et co-création. Je poursuis également l’aventure entrepreneuriale avec Chez Marwin Union, mon projet personnel que je développe pas à pas. Ce sera, un jour, un grand groupe de services, à la croisée du numérique, de la communication, du conseil et de la formation. Avec l’humain comme moteur et la vision comme cap.</p>
      <p class="font-Secondary text-base text-dark-color">Si je devais résumer mon parcours en une phrase : Je suis un bâtisseur du numérique, passionné, curieux et profondément humain, qui veut faire du digital un levier de sens, de lien et de progrès. Avec Chez Marwin Union, je réussirai à bâtir un groupe d’entreprises en prestation de service, en plaçant toujours l’humain au centre, en encourageant la co-création, en portant une vision structurée, ambitieuse et fédératrice. Je deviendrai le manager de demain : humain, structuré, visionnaire.</p>
        <!-- Mot qui suit la souris -->
    <span
      v-if="isHovering"
      :style="{ top: mouseY + 'px', left: mouseX + 'px' }"
      class="absolute pointer-events-none select-none text-8xl font-semibold font-Primary text-primary-color transition-opacity duration-200 overflow-hidden uppercase opacity-25"
    >
      {{ currentWord }}
    </span>
    </section>


    <section aria-label="Parcours de Marwin RODRIGUES" class="relative antialiased">
      <main class="relative min-h-screen overflow-hidden">
        <div class="w-full px-4 md:px-6 py-24">
          <div class="divide-y divide-primary-color [&>*]:py-16">
            
            <div class="w-full desktop:flex phone:grid phone:gap-y-[2%] phone:mb-[40%] desktop:mb-[2%] mx-[4%] desktop:gap-[2%] desktop:justify-center">
                  
              
              <!-- Vertical Timeline #1 - SCOLAIRE -->
              <div class="-my-6 w-full">
                      <h2 class="text-3xl font-Primary font-bold uppercase italic text-primary-color">Scolaire</h2>

                        <!-- Item #1 -->
                        <div class="relative pl-8 sm:pl-32 py-6 group">
                            <!-- Purple label -->
                            <NuxtLink to="https://www.isg.fr/campus/ecole-commerce-strasbourg/" target="_blank"><div class="font-Primary font-medium text-2xl text-primary-color mb-1 sm:mb-0 hover:underline">ISG</div></NuxtLink>
                            <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) -->
                            <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:border-4 after:box-content after:border-secondary-color after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                                <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold font-Primary uppercase px-[2%] h-6 mb-3 sm:mb-0 text-light-color bg-secondary-color rounded-full">Octobre 2025 à aujourd'hui</time>
                                <div class="text-xl font-bold font-Primary text-dark-color">MSC Project Management & Business</div>
                            </div>
                            <!-- Content -->
                            <div class="text-dark-color font-Secondary w-5/6">Un cursus professionnalisant qui allie pilotage de projets, stratégie et innovation, en rythme alterné. L’occasion idéale de renforcer mes compétences en gestion, tout en développant une vision globale du business dans un environnement stimulant, tourné vers l’humain et l’international.</div>
                        </div>

                        <!-- Item #2 -->
                        <div class="relative pl-8 sm:pl-32 py-6 group">
                            <!-- Purple label -->
                            <NuxtLink to="https://www.iut-nfc.univ-fcomte.fr/b-u-t-metiers-du-multimedia-et-de-linternet/" target="_blank"><div class="font-Primary font-medium text-2xl text-primary-color mb-1 sm:mb-0 hover:underline">BUT MMI</div></NuxtLink>
                            <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) -->
                            <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:border-4 after:box-content after:border-secondary-color after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                                <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold font-Primary uppercase px-[2%] h-6 mb-3 sm:mb-0 text-light-color bg-secondary-color rounded-full">Septembre 2021 à Aout 2024</time>
                                <div class="text-xl font-bold font-Primary text-dark-color">Développement web et dispositif intéractif</div>
                            </div>
                            <!-- Content -->
                            <div class="text-dark-color font-Secondary w-5/6">Cette formation professionnalisante en 3 ans (180 ECTS) mêle design graphique, communication digitale, et codage front-end. Dès la 2ᵉ année, j’ai pris part à des projets concrets (sites, applis, jeux simples, VR), avec une pédagogie par projet très marquée. Les cours couvraient les langages front‑end (VueJS, NuxtJS, TailwindCSS, SCSS), back‑end(NoSQL), l’intégration, l’ergonomie, la vidéo, la gestion de projet, et même une immersion dans la réalité virtuelle et la data visualization. Ce cursus m’a permis de devenir un véritable couteau suisse du web : polyvalent, créatif et autonome.</div>
                            <NuxtLink to="https://marwin-rodrigues.fr/MMI/" target="_blank" class="hover:underline hover:animate-pulse">>> Projets Réalisés en MMI</NuxtLink>
                        </div>

                        <!-- Item #3 -->
                        <div class="relative pl-8 sm:pl-32 py-6 group">
                            <!-- Purple label -->
                            <NuxtLink to="https://dossier.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=10806" target="_blank"><div class="font-Primary font-medium text-2xl text-primary-color mb-1 sm:mb-0 hover:underline">BTS SIO</div></NuxtLink>
                            <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) -->
                            <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:border-4 after:box-content after:border-secondary-color after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                                <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold font-Primary uppercase px-[2%] h-6 mb-3 sm:mb-0 text-light-color bg-secondary-color rounded-full">Septembre 2020 à Juillet 2021</time>
                                <div class="text-xl font-bold font-Primary text-dark-color">Solution Logiciel et Application et Maintenance</div>
                            </div>
                            <!-- Content -->
                            <div class="text-dark-color font-Secondary w-5/6">1 année en BTS SIO option SLAM au lycée Condorcet de Belfort, où j’ai appris à concevoir, développer et maintenir des applications web. Une formation concrète et technique, qui m’a permis de maîtriser les bases du développement tout en travaillant sur des projets concrets, seul ou en équipe.</div>
                        </div>

                        <!-- Item #4 -->
                        <div class="relative pl-8 sm:pl-32 py-6 group">
                            <!-- Purple label -->
                            <div class="font-Primary font-medium text-2xl text-primary-color mb-1 sm:mb-0">BAC STI2D</div>
                            <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) -->
                            <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:border-4 after:box-content after:border-secondary-color after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                                <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold font-Primary uppercase px-[2%] h-6 mb-3 sm:mb-0 text-light-color bg-secondary-color rounded-full">Septembre 2018 à Aout 2020</time>
                                <div class="text-xl font-bold font-Primary text-dark-color">Système d'Information & Numérique</div>
                            </div>
                            <!-- Content -->
                            <div class="text-dark-color font-Secondary w-5/6">Obtention avec mention assez bien, une formation axée sur les systèmes numériques, les réseaux, et l’informatique embarquée. C’est là que ma passion pour le digital s’est affirmée, en mêlant théorie, pratique et projets techniques en équipe.</div>
                        </div>

                    </div>
              <!-- End: Vertical Timeline #1 -->
                     
              <!-- Vertical Timeline #2 - PROFESSIONNEL -->
              <div class="-my-6 w-full">
                      <h2 class="text-3xl font-Primary font-bold uppercase italic text-primary-color">Professionnel</h2>

                        <!-- Item #0 -->
                        <div class="relative pl-8 sm:pl-32 py-6 group">
                            <!-- Purple label -->
                            <div class="font-Primary font-medium text-2xl text-primary-color mb-1 sm:mb-0">Business Manager en alternance</div>
                            <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) -->
                            <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:border-4 after:box-content after:border-secondary-color after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                                <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold font-Primary uppercase px-[2%] h-6 mb-3 sm:mb-0 text-light-color bg-secondary-color rounded-full">Septembre 2025 à aujourd'hui</time>
                                <NuxtLink to="https://agilia-technology.com/" target="_blank"><div class="text-xl font-bold font-Primary text-dark-color hover:underline">Agilia Technology</div></NuxtLink>
                            </div>
                            <!-- Content -->
                            <div class="text-dark-color font-Secondary w-5/6">Au sein d’une entreprise jeune, dynamique et profondément humaine, j’aurai l’opportunité de développer un vrai rôle d’intrapreneur, entre développement commercial, recrutement et accompagnement des talents. Mon objectif ? Créer des liens durables avec les clients et les consultants, en m’appuyant sur des valeurs fortes : confiance, agilité et respect. Une aventure professionnelle qui s’annonce aussi exigeante qu’excitante !</div>
                        </div>

                                                <!-- Item #1 -->
                        <div class="relative pl-8 sm:pl-32 py-6 group">
                            <!-- Purple label -->
                            <div class="font-Primary font-medium text-2xl text-primary-color mb-1 sm:mb-0">Indépendant en Stratégie Digitale & QVT</div>
                            <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) -->
                            <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:border-4 after:box-content after:border-secondary-color after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                                <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold font-Primary uppercase px-[2%] h-6 mb-3 sm:mb-0 text-light-color bg-secondary-color rounded-full">Mai 2023 à Aujourd'hui</time>
                                <NuxtLink to="/chez-marwinUnion" target="_blank"><div class="text-xl font-bold font-Primary text-dark-color hover:underline">Chez Marwin Union</div></NuxtLink>
                            </div>
                            <!-- Content -->
                            <div class="text-dark-color font-Secondary w-5/6">Auto-entreprise à double service, Chez Marwin-web pour la digitalisation de mes clients et Chez Marwin TeamCare pour l'organisation d'événements sur mesure pour entreprise via un réseau de partenaire pour booster la cohésion des équipes et éviter le turnover.</div>
                            <NuxtLink to="/chez-marwinUnion" class="hover:underline hover:animate-pulse">>> En savoir plus</NuxtLink>
                        </div>

                        <!-- Item #2 -->
                        <div class="relative pl-8 sm:pl-32 py-6 group">
                            <!-- Purple label -->
                            <div class="font-Primary font-medium text-2xl text-primary-color mb-1 sm:mb-0">Ambassadeur</div>
                            <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) -->
                            <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:border-4 after:box-content after:border-secondary-color after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                                <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold font-Primary uppercase px-[2%] h-6 mb-3 sm:mb-0 text-light-color bg-secondary-color rounded-full">Octobre 2025 à Février 2026</time>
                                <NuxtLink to="https://www.carte-klub.com/" target="_blank"><div class="text-xl font-bold font-Primary text-dark-color hover:underline">KLUB</div></NuxtLink>
                            </div>
                            <!-- Content -->
                            <div class="text-dark-color font-Secondary w-5/6">Représentation de l’application KLUB sur le terrain : distribution de flyers, animation de stands et création de contenu pour promouvoir une appli qui aide les jeunes à profiter de réductions locales.</div>
                        </div>

                        <!-- Item #3 -->
                        <div class="relative pl-8 sm:pl-32 py-6 group">
                            <!-- Purple label -->
                            <div class="font-Primary font-medium text-2xl text-primary-color mb-1 sm:mb-0">Webmaster</div>
                            <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) -->
                            <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:border-4 after:box-content after:border-secondary-color after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                                <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold font-Primary uppercase px-[2%] h-6 mb-3 sm:mb-0 text-light-color bg-secondary-color rounded-full">Février 2025 à Aout 2025</time>
                                <NuxtLink to="https://www.groupeseb.com/fr" target="_blank"><div class="text-xl font-bold font-Primary text-dark-color hover:underline">Groupe SEB</div></NuxtLink>
                            </div>
                            <!-- Content -->
                            <div class="text-dark-color font-Secondary w-5/6">Au sein d’une équipe passionnée et bienveillante, j’ai contribué à la mise en ligne des contenus produits, à l’optimisation des pages de vente, et à l’amélioration continue de l’expérience utilisateur sur plusieurs sites web du groupe. Une immersion riche dans l’univers du digital au sein d’un grand nom de l’industrie, où j’ai développé rigueur, autonomie… et une vraie culture orientée client.</div>
                        </div>

                        <!-- Item #4 -->
                        <div class="relative pl-8 sm:pl-32 py-6 group">
                            <!-- Purple label -->
                            <div class="font-Primary font-medium text-2xl text-primary-color mb-1 sm:mb-0">Développeur web en alternance</div>
                            <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) -->
                            <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:border-4 after:box-content after:border-secondary-color after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                                <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold font-Primary uppercase px-[2%] h-6 mb-3 sm:mb-0 text-light-color bg-secondary-color rounded-full">Septembre 2022 à Aout 2024</time>
                                <NuxtLink to="https://www.forvia.com/fr" target="_blank"><div class="text-xl font-bold font-Primary text-dark-color hover:underline">Forvia</div></NuxtLink>
                            </div>
                            <!-- Content -->
                            <div class="text-dark-color font-Secondary w-5/6">Alternance chez Forvia en tant que Développeur Web, avec pour responsabilité la création d'applications web en utilisant des outils tels que Microsoft Power, AngularJS et .NET. J'ai également assumé les rôles de Chef de Projet, Analyste UX/UI, Webdesigner et Vidéaste lors de certaines missions.</div>
                        </div>

                        <!-- Item #4 -->
                        <div class="relative pl-8 sm:pl-32 py-6 group">
                            <!-- Purple label -->
                            <div class="font-Primary font-medium text-2xl text-primary-color mb-1 sm:mb-0">Pilote Système d'Information en alternance</div>
                            <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) -->
                            <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:border-4 after:box-content after:border-secondary-color after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                                <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold font-Primary uppercase px-[2%] h-6 mb-3 sm:mb-0 text-light-color bg-secondary-color rounded-full">Septembre 2020 à Juillet 2021</time>
                                <NuxtLink to="https://www.stellantis.com/fr" target="_blank"><div class="text-xl font-bold font-Primary text-dark-color hover:underline">Stellantis</div></NuxtLink>
                            </div>
                            <!-- Content -->
                            <div class="text-dark-color font-Secondary w-5/6">Une année d alternance chez Stellantis en tant que Pilote Système d'Information, avec pour responsabilité la création de fichiers Excel comportant des macros développées en VBA.</div>
                        </div>
              </div>
              <!-- End: Vertical Timeline #2 -->
                     
              <!-- Vertical Timeline #3 - BENEVOLAT -->
              <div class="-my-6 w-full">
                      <h2 class="text-3xl font-Primary font-bold uppercase italic text-primary-color">Bénévolat</h2>

                        <!-- Item #1 -->
                        <div class="relative pl-8 sm:pl-32 py-6 group">
                            <!-- Purple label -->
                            <div class="font-Primary font-medium text-2xl text-primary-color mb-1 sm:mb-0">Responsable Développement web &<br /> Communication</div>
                            <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) -->
                            <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:border-4 after:box-content after:border-secondary-color after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                                <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold font-Primary uppercase px-[2%] h-6 mb-3 sm:mb-0 text-light-color bg-secondary-color rounded-full">Février 2023 à Janvier 2026</time>
                                <div class="text-xl font-bold font-Primary text-dark-color">Jadyss</div>
                            </div>
                            <!-- Content -->
                            <div class="text-dark-color font-Secondary w-5/6">Je coordonne deux équipes de plus de 15 bénévoles autour d’un projet passion : rallumer la flamme de la communauté UHC française sur Minecraft avec ambition, créativité et professionnalisme. Mon rôle mêle pilotage technique, communication et gestion humaine, pour donner vie à une expérience immersive où chaque détail compte, sans jamais perdre de vue l’essentiel : l’humain au cœur de tout.</div>
                        </div>

                        <!-- Item #2 -->
                        <div class="relative pl-8 sm:pl-32 py-6 group">
                            <!-- Purple label -->
                            <div class="font-Primary font-medium text-2xl text-primary-color mb-1 sm:mb-0">Arbitre & Community Manager</div>
                            <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) -->
                            <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:border-4 after:box-content after:border-secondary-color after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                                <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold font-Primary uppercase px-[2%] h-6 mb-3 sm:mb-0 text-light-color bg-secondary-color rounded-full">Aout 2021 à Mars 2024</time>
                                <NuxtLink to="https://ekalia.fr/" target="_blank"><div class="text-xl font-bold font-Primary text-dark-color hover:underline">Ekalia</div></NuxtLink>
                            </div>
                            <!-- Content -->
                            <div class="text-dark-color font-Secondary w-5/6">Expérience en tant qu'Arbitre Événementiel et Community Manager au sein de l'association Ekalia, organisatrice d'événements de jeux vidéo en ligne, conformément à la loi 1901.</div>
                        </div>

                        <!-- Item #3 -->
                        <div class="relative pl-8 sm:pl-32 py-6 group">
                            <!-- Purple label -->
                            <div class="font-Primary font-medium text-2xl text-primary-color mb-1 sm:mb-0">Cours particulier pour adolescents</div>
                            <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) -->
                            <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:border-4 after:box-content after:border-secondary-color after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                                <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold font-Primary uppercase px-[2%] h-6 mb-3 sm:mb-0 text-light-color bg-secondary-color rounded-full">Février 2025 à Aout 2025</time>
                                <div class="text-xl font-bold font-Primary text-dark-color">Innitiation à la programmation</div>
                            </div>
                            <!-- Content -->
                            <div class="text-dark-color font-Secondary w-5/6">Encadrement et initiation à la programmation pour des groupes d'adolescents âgés d'environ 13 ans</div>
                        </div>

                        <!-- Item #4 -->
                        <div class="relative pl-8 sm:pl-32 py-6 group">
                            <!-- Purple label -->
                            <div class="font-Primary font-medium text-2xl text-primary-color mb-1 sm:mb-0">Modérateur, Gérant Statistiques et<br /> Suggestions et UI Designer</div>
                            <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) -->
                            <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:border-4 after:box-content after:border-secondary-color after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                                <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold font-Primary uppercase px-[2%] h-6 mb-3 sm:mb-0 text-light-color bg-secondary-color rounded-full">Juillet 2019 à Juillet 2021</time>
                                <div class="text-xl font-bold font-Primary text-dark-color">Ezaly</div>
                            </div>
                            <!-- Content -->
                            <div class="text-dark-color font-Secondary w-5/6">Gestion de micro-événements(2h), des statistiques, des suggestions des utilisateurs ainsi que designer l'ensemble des interfaces.</div>
                        </div>
              </div>
              <!-- End: Vertical Timeline #3 -->
                    
            </div>


            </div>
        </div>
    </main>

  </section>

  <div class="relative flex justify-center items-center">
    <hr class="px-10 border-primary-color border-2 shadow-lg shadow-primary-color w-1/3 desktop:mr-4"/>
    <div>
      <h2 class="text-center mb-4 text-primary-color desktop:text-4xl font-Primary font-extralight">Marwin c'est</h2>
      <img loading="lazy" src="/imgs/Marwin/Marwin-Stats.png" alt="Image Me with duotone">
    </div>
    <hr class="px-10 border-primary-color border-2 shadow-lg shadow-primary-color w-1/3"/>

    <div class="absolute desktop:bottom-48">
      <div class="desktop:flex phone:grid phone:grid-cols-2 phone:gap-x-44 phone:gap-40 desktop:gap-96">
        <div class="desktop:flex desktop:gap-28 desktop:mr-52">
          <p class="animate-bounce text-center phone:text-xs desktop:text-base desktop:font-semibold">+999 lignes de codes</p>
          <p class="animate-bounce text-center phone:text-xs desktop:text-base desktop:font-semibold">14 clients</p>
        </div>
        
        <div class="desktop:flex desktop:gap-28">
          <p class="animate-bounce text-center phone:text-xs desktop:text-base desktop:font-semibold"> {{ projectCount }} projets</p>
          <p class="animate-bounce text-center phone:text-xs desktop:text-base desktop:font-semibold">6 ans d'expériences</p>
        </div>
      </div>
    </div>
  </div>

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