<template>
  <div
    v-if="show"
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
  >
    <div class="bg-light-color p-6 rounded-xl shadow-xl max-w-sm text-center">
      <h2 class="text-xl font-semibold text-green-600 mb-2">Merci pour votre message !</h2>
      <p class="text-gray-700 mb-4">Je vous répondrai dans les plus brefs délais.</p>
      <button
        @click="closePopup"
        class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
      >
        Fermer
      </button>
    </div>
  </div>
</template>

<script setup>
import { watch, onUnmounted } from 'vue'

const props = defineProps({
  show: Boolean
})

const emit = defineEmits(['close'])

const toggleScroll = (disable) => {
  if (disable) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

watch(() => props.show, (newVal) => {
  toggleScroll(newVal)
})

// Nettoyage au démontage du composant
onUnmounted(() => {
  toggleScroll(false)
})

const closePopup = () => {
  emit('close')
}
</script>