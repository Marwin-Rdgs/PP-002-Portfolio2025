<script setup>
import { ref, onMounted } from 'vue';

const notifOpen = ref(false);

// Fonction pour fermer la popup
const closePopup = () => {
  notifOpen.value = false;
  sessionStorage.setItem('popupSeen', 'true');
};

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

        <h1 class="text-xl font-bold text-primary-color">Recherche d'alternance</h1>
        <p class="mt-2 text-dark-color">
          Admis au master MSC Project Management & Business, je suis à la recherche d'une entreprise pour accueillir une alternance de 2 ans dans les alentours de Strasbourg
        </p>
        <div class="desktop:flex phone:grid justify-center gap-[20%] mt-6">
          <RouterLink to="/about">
            <button @click="closePopup" class="bg-light-color rounded-full desktop:px-[64px] phone:px-[10px] phone:text-sm desktop:text-lg py-[4%] text-center font-Primary font-bold drop-shadow-lg hover:scale-110 hover:-translate-y-2 hover:shadow-secondary-color hover:shadow-lg transition-all ease-in-out duration-300">
              Voir mon profil
            </button>
          </RouterLink>
          <RouterLink to="/contact">
            <button @click="closePopup" class="bg-light-color rounded-full desktop:px-[64px] phone:px-[10px] phone:text-sm desktop:text-lg py-[4%] text-center font-Primary font-bold drop-shadow-lg hover:scale-110 hover:-translate-y-2 hover:shadow-secondary-color hover:shadow-lg transition-all ease-in-out duration-300">
              Me contacter
            </button>
          </RouterLink>
        </div>
      </div>
    </div>

    <!-- Bouton de notification -->
    <button
      class="fixed bottom-6 left-6 z-[1000] rounded-full bg-primary-color px-4 py-2 text-white font-bold animate-bounce shadow-lg"
      @click="notifOpen = true"
    >
      1
    </button>
  </div>
</template>
