<script setup>
import { ref, computed, onMounted } from 'vue';
import CardArticle from '@/components/cardArticle.vue';
import articleListRaw from '@/Data/CMU-articles.json';
import feedbackListRaw from '@/Data/feedbackIndex.json';
import projectListRaw from '@/data/projectList.json';
import Swiper from 'swiper/bundle';
import CardFeedback from '/components/cardFeedback.vue';
import CardProject from '/components/cardProject.vue';
import FAQ from '/components/faq.vue';

const feedbackList = ref(feedbackListRaw);
const articleList = ref(articleListRaw);

// 🔍 Sélection du type de prestation (filtre)
const selectedPresta = ref('all');

// 🔁 Projets filtrés selon la prestation sélectionnée et limités à 3
const filteredProjectList = computed(() => {
  let filtered = [...projectListRaw]
    .reverse()
    .filter(project =>
      selectedPresta.value === 'all'
        ? ['web', 'teamcare'].includes(project.presta?.toLowerCase())
        : project.presta?.toLowerCase() === selectedPresta.value
    );
  return filtered.slice(0, 3); // Seulement les 3 derniers projets
});

// ✅ Correction ici : destructuration directe des props
const feedbacks = ref(
  feedbackListRaw.filter(fb => fb.categ === 'presta')
)


const swiperRef = ref(null)

onMounted(() => {
  new Swiper(swiperRef.value, {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 20,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
})
</script>

<template>
  <section>
      <section class="flex justify-center items-center gap-[2%] mt-[6%] animate-pulse w-[90%] mx-auto">
    <img src="/public/imgs/Chez-MarwinUnion/CMU.svg" alt="" class="desktop:w-[128px] phone:w-[64px] animate-fadeIn">
    <h1 class="font-Primary desktop:text-8xl phone:text-2xl text-primary-color drop-shadow-lg animate-fadeIn">Chez Marwin-Union</h1>
  </section>

  <div class="mt-[3%] mb-[6%] mx-[10%]">
    <h3 class="text-lg font-Primary font-semibold text-dark-color">Une vision humaine, deux services complémentaires.</h3>
    <p class="text-base font-Secondary text-dark-color text-justify">Étudiant en communication digitale, j’ai voulu me challenger très tôt. En parallèle de mes études, j’ai lancé Chez Marwin-Web pour proposer des accompagnements personnalisés aux commerçants, artisans et professionnels souhaitant améliorer leur visibilité en ligne. L’idée était simple : appliquer mes apprentissages à des projets concrets, en mettant mes compétences au service de ceux qui font vivre nos territoires.</p>
    <p class="text-base font-Secondary text-dark-color text-justify">Mais Chez Marwin Union, c’est bien plus qu’un nom d’auto-entreprise : c’est une philosophie. Chaque projet naît d’une vraie collaboration entre vous, avec vos idées, vos envies, vos exigences — et moi, avec mon expertise, ma créativité et mon sens de l’écoute.</p>
    <p class="text-base font-Secondary text-dark-color text-justify">Deux ans plus tard, voyant les résultats concrets et la fidélité de mes clients, j’ai eu envie de me réinventer. En sortant du 100 % digital, j’ai lancé un deuxième service : <a href="#CMTC" class="hover:underline">Chez Marwin-TeamCare</a>.</p>
    <p class="text-base font-Secondary text-dark-color text-justify"><span class="font-bold">L’objectif</span> : accompagner les entreprises dans un autre domaine essentiel, souvent négligé — le bien-être de leurs équipes. Car une entreprise épanouie, c’est d’abord une équipe soudée et motivée.</p>
  </div>    

  <section class="mb-[10%]">
    <h4 class="text-xl font-Primary text-primary-color uppercase font-semibold ml-[4%] mb-[2%]">articles</h4>
    <div class="grid desktop:grid-cols-3 mx-[4%] gap-[2%]">
      <CardArticle         
        v-for="(article, index) in articleList" 
        :key="index" 
        :article="article"
      />
    </div>
    <RouterLink to="articles"><p class="underline text-right mr-[4%]">Voir plus...</p></RouterLink>
  </section>

  <!-- Présentation des services -->
  <section class="w-full phone:mb-[20%] desktop:mb-0">
    <!-- CMW -->
    <div class="bg-CMW-secondary bg-opacity-30 items-center desktop:flex phone:grid phone:grid-cols-1 desktop:gap-[10%] justify-between py-[4%] phone:h-[600px] desktop:h-full">
      <div class="grid pl-[4%] gap-[10%] phone:order-2 desktop:order-1">
        <p class="w-full"><b>Donner vie à votre présence digitale, main dans la main.</b><br />Chez Marwin-Web est le premier service né de Chez Marwin Union. Il est dédié à la communication digitale sous toutes ses formes : création de sites web promotionnels, identité visuelle, gestion de réseaux sociaux, design print, montage vidéo... Ici, pas de solutions standardisées. Je vous accompagne de A à Z dans la création d’une image qui vous ressemble, avec des outils modernes, un regard extérieur bienveillant et des résultats concrets. Chaque collaboration est pensée comme un projet commun : vous apportez la vision, je propose la structure, les idées, les solutions, et surtout une grande réactivité.</p>
        <div class="flex justify-center">
          <NuxtLink to="chez-marwin-web" class="border-2 border-CMW-primary rounded-xl px-[4%] py-[0.5%] bg-CMW-primary bg-opacity-0 hover:bg-opacity-100 hover:scale-110 text-dark-color font-Primary hover:text-light-color hover:-translate-y-1 transition-all duration-300">
            <button>Savoir plus</button>
          </NuxtLink>
        </div>
      </div>
      <div class="flex justify-center items-center gap-[4%] w-full phone:pl-[10%] desktop:pl-0 pr-[4%] animate-fadeIn phone:order-1 desktop:order-2">
        <img src="public/imgs/Chez-MarwinUnion/CMW.svg" alt="" class="w-[64px] animate-pulse">
        <h2 class="w-[450px] font-Primary desktop:text-3xl phone:text-2xl text-dark-color drop-shadow-lg">Chez Marwin-Web</h2>
      </div>
    </div>

    <!-- CMTC -->
    <div class="bg-CMTC-secondary bg-opacity-30 items-center flex phone:flex-col desktop:flex-row desktop:gap-[10%] justify-between py-[4%] phone:h-[330px] desktop:h-full">
      <div class="flex justify-center items-center gap-[4%] w-full pl-[4%] animate-fadeIn">
        <img src="public/imgs/Chez-MarwinUnion/CMTC.svg" alt="" class="desktop:w-[64px] phone:w-[32px] animate-pulse">
        <h2 class="w-[450px] font-Primary text-3xl text-dark-color drop-shadow-lg">Chez Marwin-TeamCare</h2>
      </div>
      <div class="grid pr-[4%] gap-[10%] mx-[4%]">
        <p class="w-full phone:text-xs desktop:text-base"><b>Renforcer l’humain au cœur de l’entreprise.</b><br /> Lancé en mai 2025, Chez Marwin-TeamCare est un service tourné vers l’humain. Je vous accompagne dans la conception d’événements sur mesure, adaptés à votre culture d’entreprise, à vos besoins, et à vos envies. Grâce à un réseau de partenaires (bars, restaurants, centres de loisirs, photographes, taxis…), vous bénéficiez d’un service clé en main, d’avantages exclusifs et d’une mise en relation rapide. Et comme tout est lié, ces partenaires sont également valorisés grâce au service digital de Chez Marwin-Web, dans une logique gagnant-gagnant. Son objectif : aider les entreprises à renforcer la cohésion d’équipe et à prendre soin du bien-être de leurs collaborateurs, à travers des moments clés comme des team buildings et afterworks.</p>
        <div class="flex justify-center">
          <NuxtLink to="chez-marwin-teamcare" class="border-2 border-CMTC-primary rounded-xl px-[4%] py-[0.5%] bg-CMTC-primary bg-opacity-0 hover:bg-opacity-100 hover:scale-110 text-dark-color font-Primary hover:text-light-color hover:-translate-y-1 transition-all duration-300">
            <button>Savoir plus</button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
    <h3 class="text-5xl font-Primary font-bold text-primary-color ml-[2%]">Nos co-créations</h3>

    <!-- Filtres -->
    <div class="flex gap-4 mt-6 mb-10 justify-center">
      <button
        @click="selectedPresta = 'all'"
        :class="[
          'px-4 py-2 rounded-lg font-Primary transition-all duration-300 border-2',
          selectedPresta === 'all' ? 'border-primary-color text-primary-color scale-105 shadow-lg' : 'border-gray-300 text-gray-600 hover:border-primary-color hover:text-primary-color'
        ]"
      >
        Tous
      </button>
      <button
        @click="selectedPresta = 'web'"
        :class="[
          'px-4 py-2 rounded-lg font-Primary transition-all duration-300 border-2',
          selectedPresta === 'web' ? 'border-CMW-primary text-CMW-primary scale-105 shadow-lg' : 'border-gray-300 text-gray-600 hover:border-CMW-primary hover:text-CMW-primary'
        ]"
      >
        Web
      </button>
      <button
        @click="selectedPresta = 'teamcare'"
        :class="[
          'px-4 py-2 rounded-lg font-Primary transition-all duration-300 border-2',
          selectedPresta === 'teamcare' ? 'border-CMTC-primary text-CMTC-primary scale-105 shadow-lg' : 'border-gray-300 text-gray-600 hover:border-CMTC-primary hover:text-CMTC-primary'
        ]"
      >
        TeamCare
      </button>
    </div>

    <!-- Cartes projets filtrées -->
    <div class="grid desktop:grid-cols-3 phone:gap-[4%] desktop:gap-[10%] mx-[10%] phone:mb-[80%] desktop:mb-[50%] mt-[2%]">
      <CardProject
        class="w-full"
        v-for="(project, index) in filteredProjectList"
        :key="index"
        :project="project"
      />
    </div>
  </section>
  
    <section class="-mt-[40%]">
      <h3 class="text-5xl font-Primary font-bold text-primary-color mr-[2%] text-right">Les retours clients</h3>
      <div class="max-w-6xl mx-auto px-4">
        <div ref="swiperRef" class="swiper">
          <div class="swiper-wrapper mb-16">
            <div v-for="(feedback, index) in feedbacks" :key="index" class="swiper-slide">
              <CardFeedback :feedback="feedback" />
            </div>
          </div>
        </div>
      </div>
    </section>

      <section class="grid desktop:grid-cols-2 items-center gap-[2%] desktop:ml-[6%] mr-[6%]">
      <FAQ 
      question1="Pourquoi avoir créé une entreprise double service alliant digital et événementiel ?"
      reponse1="J’ai créé Chez Marwin Union comme un projet de vie, né d’un défi personnel : construire, en totale autonomie, une entreprise qui me ressemble, en parallèle de mes études, de mes emplois et de mes engagements associatifs. Ce projet incarne une ambition profonde : mettre mes compétences au service des autres, avec sens et authenticité. À travers le digital et l'événementiel, je souhaite rassembler les idées, valoriser les parcours, créer du lien et accompagner des projets à impact humain. Chez Marwin Union, c’est l’union entre vos envies, vos valeurs et mon expertise"
      
      question2="Qu’est-ce qui différencie 'Chez Marwin Union' des agences classiques ?"
      reponse2="Chez Marwin Union n’est pas une agence comme les autres. C’est avant tout une aventure humaine, portée par une vision claire : allier le digital et l’événementiel autour d’une même philosophie, celle de l’accompagnement sincère. Ici, chaque projet est pensé comme une collaboration, pas comme une simple commande. Je prends le temps de comprendre vos besoins, vos valeurs, vos envies, pour co-construire avec vous des solutions qui vous ressemblent. Vous n’êtes jamais seul face à une prestation abstraite : vous êtes impliqué, informé, et accompagné à chaque étape. Travailler avec Chez Marwin Union, c’est faire le choix d’une approche sur mesure, transparente et profondément humaine, où l’écoute, le respect et l’expertise avancent toujours main dans la main."
      
      question3="Est-il possible de combiner un projet digital et un événement d’entreprise ?"
      reponse3="Absolument ! L’une des forces de Chez Marwin Union, c’est justement de pouvoir proposer une synergie entre les deux univers. Vous organisez un séminaire d’entreprise avec Chez Marwin TeamCare ? Vous pouvez bénéficier d’une réduction sur votre futur site web ou une prestation digitale avec Chez Marwin Web. Et si vous avez besoin des deux services en même temps, c’est tout à fait possible. Nous établissons deux devis distincts, pensés pour s’adapter à vos besoins et à votre budget. Tout est fait pour simplifier votre organisation, avec un seul interlocuteur, à l’écoute de vos idées."/>
    
      <div class="grid items-center gap-x-5">
        <div class="grid grid-cols-2 gap-[2%] items-center">
          <img src="/imgs/envato/FAQ4.jpg" alt="" class="rounded-xl w-[500px] h-[250px] object-cover">
          <img src="/imgs/envato/FAQ5.jpg" alt="" class="rounded-xl w-[500px] h-[250px] object-cover">
        </div>
      </div>
    </section>

</template>
