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
      <h3 class="text-2xl font-semibold mb-4">Politique de confidentialité</h3>

      <!-- Contenu -->
      <div class="space-y-4 text-sm text-dark-color">
        <p><strong>1. Introduction</strong><br>
          Le site <em>Marwin RODRIGUES</em> respecte votre vie privée et s’engage à protéger les données personnelles que vous fournissez via le formulaire de contact ou lors du dépôt de témoignages/feedbacks.
        </p>

        <p><strong>2. Données collectées</strong><br>
          - Données saisies dans le formulaire de contact : nom, adresse email, message.<br>
          - Données contenues dans les feedbacks : prénom ou pseudonyme (facultatif), contenu du retour, relation avec Marwin Rodrigues (client, professeur, collègue, etc.).
        </p>

        <p><strong>3. Finalité du traitement</strong><br>
          Les données sont utilisées uniquement pour répondre aux messages ou mettre en valeur des retours professionnels dans un but de communication, de preuve sociale ou de recrutement.
        </p>

        <p><strong>4. Conservation des données</strong><br>
          Les messages reçus sont conservés jusqu’à un maximum de 12 mois. Les feedbacks peuvent être conservés indéfiniment sauf demande contraire de votre part.
        </p>

        <p><strong>5. Partage des données</strong><br>
          Aucune donnée personnelle n’est vendue ni transmise à des tiers. Les témoignages affichés publiquement sont anonymisés ou affichés avec autorisation.
        </p>

        <p><strong>6. Vos droits</strong><br>
          Conformément à la loi "Informatique et Libertés" et au RGPD, vous pouvez demander à accéder, rectifier ou supprimer vos données personnelles à tout moment en envoyant un mail à : <a href="mailto:contact@marwin-rodrigues.fr" class="text-primary-color underline">contact@marwin-rodrigues.fr</a>
        </p>

        <p><strong>7. Sécurité</strong><br>
          Les données sont stockées sur un serveur sécurisé. Aucune donnée sensible (mot de passe, informations bancaires) n’est collectée.
        </p>

        <p><strong>8. Contact</strong><br>
          Pour toute question relative à cette politique, contactez Marwin Rodrigues à l’adresse mentionnée ci-dessus.
        </p>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { defineProps, defineEmits, watch, onUnmounted } from 'vue'

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

// Scroll lock
const toggleBodyScroll = (lock) => {
  if (lock) {
    document.body.classList.add('overflow-hidden')
  } else {
    document.body.classList.remove('overflow-hidden')
  }
}

watch(() => props.visible, (newVal) => {
  toggleBodyScroll(newVal)
})

onUnmounted(() => {
  toggleBodyScroll(false)
})
</script>

<style scoped>
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
