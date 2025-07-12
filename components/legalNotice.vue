<template>
  <transition name="slide">
    <div
      v-if="visible"
      class="fixed h-full desktop:w-[30%] bg-light-color right-0 top-0 z-[9999] shadow-lg p-6 overflow-y-auto"
    >
      <!-- Croix de fermeture -->
      <button @click="close" class="absolute top-4 right-4 text-2xl font-bold text-dark-color hover:text-primary-color">
        &times;
      </button>

      <!-- Titre -->
      <h3 class="text-2xl font-semibold mb-4">Mentions légales</h3>

      <!-- Contenu -->
      <div class="space-y-4 text-sm text-dark-color">
        <p><strong>Éditeur du site :</strong><br>
          Chez Marwin Union<br>
          Marwin Rodrigues – Auto-entrepreneur<br>
          SIRET : 92321733500010<br>
          Adresse : 15 rue de gresswiller, Strasbourg 67200, France<br>
          Email : <a href="mailto:contact@marwin-rodrigues.fr" class="text-primary-color underline">contact@marwin-rodrigues.fr</a>
        </p>

        <p><strong>Hébergement :</strong><br>
          Infomaniak Network SA<br>
           Rue Eugène-Marziano 25, 1227 Les Acacias, Genève, Suisse<br>
          Site web : <a href="https://www.infomaniak.com" target="_blank" class="text-primary-color underline">www.infomaniak.com</a>
        </p>

        <p><strong>Responsable de la publication :</strong><br>
          Marwin Rodrigues
        </p>

        <p><strong>Propriété intellectuelle :</strong><br>
          Le contenu de ce site est protégé. Toute reproduction est interdite sans autorisation.
        </p>

        <p><strong>Utilisation des données personnelles :</strong><br>
          Aucune donnée personnelle n’est collectée sans consentement. Consultez notre politique de confidentialité pour en savoir plus.
        </p>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { defineProps, defineEmits, watch, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  visible: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['close'])

const close = () => {
  emit('close')
}

// Gestion du scroll lock sur le body
const toggleBodyScroll = (lock) => {
  if (lock) {
    document.body.classList.add('overflow-hidden')
  } else {
    document.body.classList.remove('overflow-hidden')
  }
}

// Surveille les changements de visibilité pour activer/désactiver le scroll
watch(() => props.visible, (newVal) => {
  toggleBodyScroll(newVal)
})

// Sécurité au démontage
onUnmounted(() => {
  toggleBodyScroll(false)
})
</script>

<style scoped>
/* Animation de slide-in */
.slide-enter-active {
  transition: transform 0.3s ease-out;
}
.slide-leave-active {
  transition: transform 0.3s ease-in;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>