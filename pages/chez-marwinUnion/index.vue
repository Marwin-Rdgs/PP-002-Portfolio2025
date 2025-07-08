<script setup>
import {ref} from 'vue';
import CardArticle from '@/components/cardArticle.vue';
import articleListRaw from '@/Data/CMU-articles.json'
import CarouselFeedback from '@/components/CarouselFeedback.vue';
import feedbackListRaw from '@/Data/feedbackIndex.json'
import partnerListRaw from '@/Data/CMTC-partners.json'
import CarouselPartners from '@/components/CMTC-CarouselPartners.vue'

const partnerList = ref(partnerListRaw)

const feedbackList = ref(feedbackListRaw);
const articleList = ref(articleListRaw);
</script>

<template>
    <section class="flex justify-center items-center gap-[2%] mt-[6%] animate-pulse w-[90%] mx-auto">
        <img src="/imgs/Chez-MarwinUnion/CMU.svg" alt="" class="desktop:w-[128px] phone:w-[64px] animate-fadeIn">
        <h1 class="font-Primary desktop:text-8xl phone:text-2xl text-primary-color drop-shadow-lg animate-fadeIn">Chez Marwin-Union</h1>
    </section>
    <div class="mt-[3%] mb-[6%] mx-[10%]">
        <h3 class="text-lg font-Primary font-semibold text-dark-color">Une vision humaine, deux services complémentaires.</h3>
        <p class="text-base font-Secondary text-dark-color text-justify">Étudiant en communication digitale, j’ai voulu me challenger très tôt. En parallèle de mes études, j’ai lancé Chez Marwin-Web pour proposer des accompagnements personnalisés aux commerçants, artisans et professionnels souhaitant améliorer leur visibilité en ligne. L’idée était simple : appliquer mes apprentissages à des projets concrets, en mettant mes compétences au service de ceux qui font vivre nos territoires.</p>
        <p class="text-base font-Secondary text-dark-color text-justify">Mais Chez Marwin Union, c’est bien plus qu’un nom d’auto-entreprise : c’est une philosophie. Chaque projet naît d’une vraie collaboration entre vous, avec vos idées, vos envies, vos exigences — et moi, avec mon expertise, ma créativité et mon sens de l’écoute.</p>
        <p class="text-base font-Secondary text-dark-color text-justify">Deux ans plus tard, voyant les résultats concrets et la fidélité de mes clients, j’ai eu envie de me réinventer. En sortant du 100 % digital, j’ai lancé un deuxième service : <a href="#CMTC" class="hover:underline">Chez Marwin-TeamCare</a>.</p>
        <p class="text-base font-Secondary text-dark-color text-justify"><span class="font-bold">L’objectif</span> : accompagner les entreprises dans un autre domaine essentiel, souvent négligé — le bien-être de leurs équipes. Car une entreprise épanouie, c’est d’abord une équipe soudée et motivée.</p>
    </div>
    <!-- <p class="text-justify mx-[10%] text-sm mt-[3%] mb-[6%]">Chez Marwin-Union, je propose une vision humaine et engagée de l’accompagnement professionnel. Fondée sur des valeurs de partage, d’écoute et de challenge, cette auto-entreprise évolue aux côtés de ses clients, en s’adaptant à leurs besoins réels. Aujourd’hui, elle rassemble deux pôles d’expertise : l’un dédié à la digitalisation de la communication, l’autre à la qualité de vie au travail. Deux approches complémentaires, avec un objectif commun : créer du lien, donner du sens, et avancer ensemble.</p> -->
    <!-- <p class="text-justify mx-[10%] text-sm mt-[3%] mb-[6%]">Donner vie à votre présence digitale, main dans la main.Chez Marwin-Web est le premier service né de Chez Marwin Union. Il est dédié à la communication digitale sous toutes ses formes : création de sites web promotionnels, identité visuelle, gestion de réseaux sociaux, design print, montage vidéo... Ici, pas de solutions standardisées. Je vous accompagne de A à Z dans la création d’une image qui vous ressemble, avec des outils modernes, un regard extérieur bienveillant et des résultats concrets. Chaque collaboration est pensée comme un projet commun : vous apportez la vision, je propose la structure, les idées, les solutions, et surtout une grande réactivité.</p> -->
    
    
    <section class="mb-[10%]">
        <h4 class="text-xl font-Primary text-primary-color uppercase font-semibold ml-[4%] mb-[2%]">articles</h4>
        <div class="grid desktop:grid-cols-3 mx-[4%] gap-[2%]">
            <CardArticle         
                v-for="(article, index) in articleList" 
                :key="index" 
                :article="article"/>
            </div>
        </section>

        <!-- Présentation des services -->
        <section>
            <!-- CMW -->
            <div class="bg-CMW-secondary bg-opacity-30 items-center flex gap-[10%] justify-between py-[4%]">
                <div class="grid pl-[4%] gap-[10%]">
                    <p class="w-full"><b>Donner vie à votre présence digitale, main dans la main.</b><br />Chez Marwin-Web est le premier service né de Chez Marwin Union. Il est dédié à la communication digitale sous toutes ses formes : création de sites web promotionnels, identité visuelle, gestion de réseaux sociaux, design print, montage vidéo... Ici, pas de solutions standardisées. Je vous accompagne de A à Z dans la création d’une image qui vous ressemble, avec des outils modernes, un regard extérieur bienveillant et des résultats concrets. Chaque collaboration est pensée comme un projet commun : vous apportez la vision, je propose la structure, les idées, les solutions, et surtout une grande réactivité.</p>
                    <div class="flex justify-center">
                        <NuxtLink to="/chez-marwin-web" class="border-2 border-CMW-primary rounded-xl px-[4%] py-[0.5%] bg-CMW-primary bg-opacity-0 hover:bg-opacity-100 hover:scale-110 text-dark-color font-Primary hover:text-light-color hover:-translate-y-1 transition-all duration-300"><button>Savoir plus</button></NuxtLink>
                    </div>
                </div>
                <div class="flex justify-center items-center gap-[4%] w-full pr-[4%] animate-fadeIn">
                    <img src="/imgs/Chez-MarwinUnion/CMW.svg" alt="" class="desktop:w-[64px] phone:w-[32px] animate-pulse">
                    <h2 class="w-full font-Primary text-3xl text-dark-color drop-shadow-lg">Chez Marwin-Web</h2>
                </div>
            </div>
            <!-- CMTC -->
            <div class="bg-CMTC-secondary bg-opacity-30 items-center flex gap-[10%] justify-between py-[4%]">
                <div class="flex justify-center items-center gap-[4%] w-full pl-[4%] animate-fadeIn">
                    <img src="/imgs/Chez-MarwinUnion/CMTC.svg" alt="" class="desktop:w-[64px] phone:w-[32px] animate-pulse">
                    <h2 class="w-[450px] font-Primary text-3xl text-dark-color drop-shadow-lg">Chez Marwin-TeamCare</h2>
                </div>
                <div class="grid pr-[4%] gap-[10%]">
                    <p class="w-full"><b>Renforcer l’humain au cœur de l’entreprise.</b><br /> Lancé en mai 2025, Chez Marwin-TeamCare est un service tourné vers l’humain. Je vous accompagne dans la conception d’événements sur mesure, adaptés à votre culture d’entreprise, à vos besoins, et à vos envies. Grâce à un réseau de partenaires (bars, restaurants, centres de loisirs, photographes, taxis…), vous bénéficiez d’un service clé en main, d’avantages exclusifs et d’une mise en relation rapide. Et comme tout est lié, ces partenaires sont également valorisés grâce au service digital de Chez Marwin-Web, dans une logique gagnant-gagnant. Son objectif : aider les entreprises à renforcer la cohésion d’équipe et à prendre soin du bien-être de leurs collaborateurs, à travers des moments clés comme des team buildings et afterworks.</p>
                    <div class="flex justify-center">
                        <NuxtLink to="/chez-marwin-teamcare" class="border-2 border-CMTC-primary rounded-xl px-[4%] py-[0.5%] bg-CMTC-primary bg-opacity-0 hover:bg-opacity-100 hover:scale-110 text-dark-color font-Primary hover:text-light-color hover:-translate-y-1 transition-all duration-300"><button>Savoir plus</button></NuxtLink>
                    </div>
                </div>
            </div>
        </section>
</template>