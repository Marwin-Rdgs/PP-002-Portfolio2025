<script setup>
import { ref, onMounted, watch } from 'vue';

const notifOpen = ref(false);

// Fonction pour fermer la popup
const closePopup = () => {
  notifOpen.value = false;
  sessionStorage.setItem('popupSeen', 'true');
};

// Bloque ou débloque le scroll selon l'état de notifOpen
watch(notifOpen, (newVal) => {
  if (newVal) {
    document.body.classList.add('overflow-hidden');
  } else {
    document.body.classList.remove('overflow-hidden');
  }
});

// Ouvre automatiquement la popup une seule fois au début de session
onMounted(() => {
  if (!sessionStorage.getItem('popupSeen')) {
    notifOpen.value = true;
  }
});
</script>

<template>
  <div class="relative z-[999]">
    <!-- Overlay noir semi-transparent -->
    <div
      class="fixed inset-0 bg-dark-color bg-opacity-0 transition-all duration-300"
      :class="{ 'bg-opacity-70': notifOpen }"
      v-if="notifOpen"
    ></div>

    <!-- Pop-up -->
    <div
      class="fixed top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[80%] md:w-[50%] bg-light-color rounded-xl border-primary-color border-2 shadow-md shadow-primary-color z-[999]"
      v-if="notifOpen"
    >
      <div class="p-4 relative">
        <!-- Croix de fermeture -->
        <button
          @click="closePopup"
          class="absolute top-2 right-4 text-dark-color text-2xl font-bold hover:text-primary-color transition"
          aria-label="Fermer"
        >
          &times;
        </button>

        <h1 class="text-xl font-bold text-primary-color">🚀 Un nouveau défi à construire ensemble ?</h1>
        <p class="mt-2 text-dark-color">À la rentrée d’octobre 2025, je débute un MSc en Project Management & Business à Strasbourg. Je cherche aujourd’hui l’entreprise avec laquelle grandir, expérimenter, et repousser mes limites pendant ces 2 années d’alternance. <br /> <br />
          🌟 Passionné par le digital, l’IT, la communication, l’événementiel, la mode ou encore l’audiovisuel, je suis prêt à m’investir dans un projet ambitieux <br />— le vôtre.</p>
        <div class="desktop:flex phone:grid justify-center gap-[20%] mt-6">
          <NuxtLink to="/a-propos">
            <button @click="closePopup" class="bg-light-color rounded-full desktop:px-[64px] phone:px-[10px] phone:text-sm desktop:text-lg py-[4%] text-center font-Primary font-bold drop-shadow-lg hover:scale-110 hover:-translate-y-2 hover:shadow-secondary-color hover:shadow-lg transition-all ease-in-out duration-300">
              Découvrir mon univers
            </button>
          </NuxtLink>
          <NuxtLink to="/contact">
            <button @click="closePopup" class="bg-light-color rounded-full desktop:px-[64px] phone:px-[10px] phone:text-sm desktop:text-lg py-[4%] text-center font-Primary font-bold drop-shadow-lg hover:scale-110 hover:-translate-y-2 hover:shadow-secondary-color hover:shadow-lg transition-all ease-in-out duration-300">
              Échanger ensemble
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Bouton de notification -->
    <button
      class="fixed bottom-6 left-6 z-[1000] rounded-full bg-primary-color px-4 py-2 text-white font-bold animate-bounce shadow-lg"
      @click="notifOpen = !notifOpen"
    >
      1
    </button>
  </div>
</template>