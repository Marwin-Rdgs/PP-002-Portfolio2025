<script setup>
import { ref, computed } from 'vue'
import projectListRaw from '@/data/projectList.json'
import partnersListRaw from '@/data/partners.json'
import { useHead } from '#imports';

useHead({
  title: "Chez Marwin TeamCare | Organisation d'événements d'entreprise sur mesure",
  meta: [
    {
      name: "description",
      content:
        "Chez Marwin TeamCare vous accompagne dans l'organisation d'événements d'entreprise sur mesure : team building, afterworks, dîners d'affaires. Renforcez la cohésion et le bien-être de vos équipes avec Chez Marwin Union."
    },
    {
      name: "keywords",
      content:
        "Chez Marwin TeamCare, organisation événements entreprise, team building, afterworks, dîner d'affaires, cohésion équipe, événement sur mesure, Chez Marwin Union, Marwin Rodrigues, Business Manager, Entrepreneur, Développeur Web, Gestion de projet, Digital, Communication, SEO, NuxtJS, TailwindCSS, Chez Marwin Web, Auto-entreprise, Agence de communication, Freelance, Strasbourg, Divonne les bains, Montbéliard, Doubs, Bas-rhin, Ain"
    },
    { name: "author", content: "Marwin Rodrigues" },

    // Open Graph
    { property: "og:title", content: "Chez Marwin TeamCare | Organisation d'événements d'entreprise" },
    {
      property: "og:description",
      content:
        "Service d'organisation d'événements d'entreprise sur mesure (team building, afterworks, dîners d'affaires) par Chez Marwin Union."
    },
    { property: "og:image", content: "https://marwin-rodrigues.fr/imgs/Chez-MarwinUnion/CMTC.svg" },
    { property: "og:url", content: "https://marwin-rodrigues.fr/chez-marwinUnion/chez-marwin-TeamCare" },
    { property: "og:type", content: "website" },

    // Twitter Card
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Chez Marwin TeamCare | Organisation d'événements d'entreprise" },
    {
      name: "twitter:description",
      content:
        "Renforcez la cohésion de vos équipes avec des événements sur mesure organisés par Chez Marwin TeamCare."
    },
    { name: "twitter:image", content: "https://marwin-rodrigues.fr/imgs/Chez-MarwinUnion/CMTC.svg" }
  ],
  link: [
    { rel: "canonical", href: "https://marwin-rodrigues.fr/chez-marwinUnion/chez-marwin-TeamCare" }
  ]
});


const partnerList = ref([...partnersListRaw].reverse())
const selectedPresta = ref('all')

const filteredProjectList = computed(() => {
  let filtered = [...projectListRaw]
    .reverse()
    .filter(project =>
      selectedPresta.value === 'all'
        ? ['teamcare'].includes(project.presta?.toLowerCase())
        : project.presta?.toLowerCase() === selectedPresta.value
    )
  return filtered.slice(0, 3)
})
</script>
<template>
    <section aria-label="Hero de la page Chez Marwin TeamCare service de l'entreprise Chez Marwin Union" class="flex justify-center items-center gap-[2%] mt-[6%] animate-pulse w-[90%] mx-auto">
      <img loading="lazy" src="/imgs/Chez-MarwinUnion/CMTC.svg" alt="Logo de Chez Marwin TeamCare service de Chez Marwin Union entreprise de Marwin RODRIGUES" class="desktop:w-[128px] phone:w-[64px] animate-fadeIn">
      <h1 class="font-Primary desktop:text-8xl phone:text-2xl text-CMTC-primary drop-shadow-lg animate-fadeIn">Chez Marwin-TeamCare</h1>
    </section>
    <div class="mt-[3%] mb-[6%] mx-[10%] phone:gap-y-[1%] desktop:gap-y-[6%] grid">
      <h3 class="text-lg font-Primary font-semibold text-dark-color">Chez Marwin TeamCare, c’est bien plus que de l’organisation d’événements d’entreprise : c’est une aventure collective où l’humain est au centre de chaque moment partagé.</h3>
      <p class="text-base font-Secondary text-dark-color text-justify">Je conçois chaque projet comme une rencontre entre votre culture d’entreprise, vos objectifs managériaux, vos équipes et mon réseau de partenaires passionnés, ma créativité et mon sens de l’écoute.</p>
      <p class="text-base font-Secondary text-dark-color text-justify">Spécialisé dans les team buildings, afterworks, séminaires ou encore dîners d’entreprise, je vous propose des événements sur mesure, clés en main, pensés pour renforcer la cohésion, la communication et le bien-être au sein de vos équipes.</p>
      <p class="text-base font-Secondary text-dark-color text-justify">Chaque prestation s’adapte à vos envies, à votre budget et à vos contraintes logistiques, grâce à une mise en relation rapide avec des partenaires de confiance (restaurants, animateurs, lieux, photographes…).</p>
      <p class="text-base font-Secondary text-dark-color text-justify">Mais l’accompagnement va plus loin : vos événements sont pensés dans une logique de valorisation globale. Grâce à Chez Marwin Web, je peux également vous aider à mettre en lumière ces moments sur vos réseaux, via des supports visuels ou du contenu dédié.</p>
      <p class="text-base font-Secondary text-dark-color text-justify">Mon objectif est simple : aider les entreprises à rassembler, fédérer et fidéliser leurs collaborateurs, à travers des expériences fortes, authentiques et impactantes.</p>
      <p class="text-base font-Secondary text-dark-color text-justify">Chez Marwin TeamCare, chaque événement est une histoire, et chaque collaboration une relation de confiance. Ensemble, prenons soin de votre équipe autrement.</p>
    </div>
    
  <section aria-label="Liste des partenaires de Chez Marwin TeamCare service de l'entreprise Chez Marwin Union" class="desktop:mt-[10%] phone:mt-[26%] mx-[10%]">
    <h3 class="text-5xl font-Primary font-bold text-CMTC-primary ml-[2%]">
      La famille TeamCare
    </h3>

    <!-- Carousel défilant -->
    <div class="relative overflow-hidden mt-10">
      <div class="flex gap-6 w-max"> <!--  rajouter la class="animate-marquee" si > 3  -->
        <Partner
          v-for="(partner, index) in partnerList"
          :key="index"
          :partner="partner"
        />
      </div>
    </div>
    <NuxtLink to="partner"><p class="underline text-right mr-[4%]">Voir plus...</p></NuxtLink>
  </section>


    <section aria-label="l'accompagnement du service de Chez Marwin TeamCare de l'entreprise Chez Marwin Union">
    <div class="bg-black text-white py-8">
    <div class="container mx-auto flex flex-col items-start desktop:flex-row my-12 md:my-24">
      <div class="flex flex-col w-full sticky desktop:top-36 desktop:w-1/3 mt-2 desktop:mt-12 px-8">
        <p class="ml-2 text-yellow-300 uppercase tracking-loose">Chez Marwin TeamCare</p>
        <p class="text-2xl desktop:text-3xl leading-normal desktop:leading-relaxed mb-2">L'accompagnement Chez Marwin TeamCare</p>
        <p class="text-sm desktop:text-base text-gray-50 mb-4">
          Vous êtes un(e) responsable de service, une TPE, PME et vous cherchez à améliorer la cohésion de vos équipes et réduire le turnover ?
        </p>
        <NuxtLink to="/contact" class="bg-transparent mr-auto hover:bg-yellow-300 text-yellow-300 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent">Contactez-moi</NuxtLink>
      </div>
      <div class="ml-0 md:ml-12 lg:w-2/3 sticky">
        <div class="container mx-auto w-full h-full">
          <div class="relative wrap overflow-hidden p-10 h-full">
            <div class="border-2-2 border-CMW-primary absolute h-full border"
              style="right: 50%; border: 2px solid #B2D6A8; border-radius: 1%;"></div>
            <div class="border-2-2 border-yellow-555 absolute h-full border"
              style="left: 50%; border: 2px solid #B2D6A8; border-radius: 1%;"></div>
            <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div class="order-1 w-5/12"></div>
              <div class="order-1 w-5/12 px-1 py-4 text-right">
                <p class="mb-3 text-base text-yellow-300">Étape 1</p>
                <h4 class="mb-3 font-bold text-lg desktop:text-2xl">Premier contact humain</h4>
                <p class="text-sm desktop:text-base leading-snug text-gray-50 text-opacity-100">
                  Tout commence par un échange simple et sans prise de tête, par téléphone, mail ou en face à face. Je vous présente mes services, j’écoute vos envies, et surtout, je découvre votre équipe pour imaginer un événement qui vous ressemble.
                </p>
              </div>
            </div>
            <div class="mb-8 flex justify-between items-center w-full right-timeline">
              <div class="order-1 w-5/12"></div>
              <div class="order-1  w-5/12 px-1 py-4 text-left">
                <p class="mb-3 text-base text-yellow-300">Étape 2</p>
                <h4 class="mb-3 font-bold text-lg desktop:text-2xl">Rendez-vous de co-construction</h4>
                <p class="text-sm desktop:text-base leading-snug text-gray-50 text-opacity-100">
                  En visio ou en présentiel, nous construisons ensemble l’événement idéal. Je vous présente mes partenaires (lieux, animateurs, restaurateurs, services…), on sélectionne les activités, puis je vous envoie un récapitulatif complet avec une première estimation.
                </p>
              </div>
            </div>
            <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div class="order-1 w-5/12"></div>
              <div class="order-1 w-5/12 px-1 py-4 text-right">
                <p class="mb-3 text-base text-yellow-300"> Étape 3</p>
                <h4 class="mb-3 font-bold text-lg desktop:text-2xl">Réservation et Devis</h4>
                <p class="text-sm desktop:text-base leading-snug text-gray-50 text-opacity-100">
                  Une fois votre feu vert donné, je m’occupe de tout : je contacte et réserve auprès des partenaires choisis. Une fois tout confirmé, vous recevez un devis global clair, regroupant toutes les prestations dans un seul paiement, sans surprise.
                </p>
              </div>
            </div>

            <div class="mb-8 flex justify-between items-center w-full right-timeline">
              <div class="order-1 w-5/12"></div>

              <div class="order-1  w-5/12 px-1 py-4">
                <p class="mb-3 text-base text-yellow-300">Étape 4</p>
                <h4 class="mb-3 font-bold  text-lg desktop:text-2xl text-left">Jour J : place au moment !</h4>
                <p class="text-sm desktop:text-base leading-snug text-gray-50 text-opacity-100">
                  Le jour de l’événement, place à la bonne humeur ! On se retrouve sur place, et je reste disponible pour m’assurer que tout se passe bien. Rires, cohésion et souvenirs garantis !
                </p>
              </div>
            </div>
          </div>
          <img loading="lazy" class="mx-auto -mt-[3%] w-[256px]" src="/imgs/Chez-MarwinUnion/CMTC-Signature.svg" />
        </div>
      </div>
    </div>
  </div>
  </section>

      <!-- Cartes projets filtrées -->
    <section aria-label="les projets de Chez Marwin TeamCare service de l'entreprise Chez Marwin Union" class="mx-[6%]">
    <h3 class="text-5xl font-Primary font-bold text-CMTC-primary ml-[2%]">Nos co-créations</h3>
      <div class="grid desktop:grid-cols-3 phone:gap-[4%] desktop:gap-[10%] mx-[10%] mb-[10%] mt-[2%]">
        <CardProject
          class="w-full"
          v-for="(project, index) in filteredProjectList"
          :key="index"
          :project="project"
        />
      </div>
    </section>

        <section aria-label="FAQ de Chez Marwin TeamCare service de l'entreprise Chez Marwin Union" class="grid desktop:grid-cols-2 items-center gap-[2%] mx-[6%] phone:mt-[20%] desktop:mt-[4%">
      <FAQ 
      question1="Comment sont sélectionnés vos partenaires de confiance ?"
      reponse1="Chez Marwin TeamCare, le réseau de partenaires fonctionne comme une véritable famille. Chaque partenaire est choisi pour la qualité de son service, son sens de l’accueil et sa volonté de faire vivre une belle expérience humaine. Grâce à des accords de confiance, mes partenaires s’engagent à proposer des avantages exclusifs et des réductions pour chaque événement organisé. Leur satisfaction client, tout comme la vôtre, est une priorité partagée."
      
      question2="Quelle est votre méthode pour organiser un événement professionnel réussi ?"
      reponse2="Tout commence par l’écoute de vos besoins, de votre culture d’entreprise et de l’ambiance que vous souhaitez créer. Je sélectionne ensuite les partenaires et les activités qui correspondent à votre univers, toujours avec l’objectif de renforcer la cohésion d’équipe. Une fois les éléments validés, les réservations sont effectuées auprès de mes partenaires (avec les tarifs négociés), et un devis global unique vous est proposé. Résultat : un événement fluide, sur mesure, et surtout, mémorable pour vos équipes."
      
      question3="Quels sont vos engagements en matière de qualité et de satisfaction client ?"
      reponse3="Mon engagement est simple : mettre l’humain au cœur de chaque événement. Je veux que vos collaborateurs se sentent valorisés, écoutés et soudés. Chez Marwin TeamCare, je crée des expériences qui renforcent les liens, boostent la motivation et aident à réduire le turnover en instaurant une vraie synergie d’équipe. Ce n’est pas juste un moment convivial, c’est une stratégie humaine pour faire grandir votre entreprise de l’intérieur."/>
    
      <div class="grid items-center gap-x-5">
        <div class="h-1/2 -mb-[20%]">
          <img src="/imgs/envato/FAQ5.jpg" alt="Image d'exemple de FAQ" class="rounded-xl h-full object-cover object-top w-full items-end">
        </div>
        <div class="grid grid-cols-2 gap-[2%] items-center">
          <img loading="lazy" src="/imgs/envato/FAQ4.jpg" alt="Image d'exemple de FAQ" class="rounded-xl w-[500px] h-[250px] object-cover">
          <img loading="lazy" src="/imgs/envato/FAQ3.jpg" alt="Image d'exemple de FAQ" class="rounded-xl w-[500px] h-[250px] object-cover">
        </div>
      </div>
    </section>
</template>