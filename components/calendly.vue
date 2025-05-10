<script setup>
import { watch, onUnmounted } from 'vue'

const props = defineProps({
  show: Boolean,
  url: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['close'])

const toggleScroll = (disable) => {
  document.body.style.overflow = disable ? 'hidden' : ''
}

watch(() => props.show, (val) => {
  toggleScroll(val)
})

onUnmounted(() => toggleScroll(false))

const close = () => {
  emit('close')
}
</script>

<template>
  <div
    v-if="show"
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
  >
    <div class="bg-white p-4 rounded-xl shadow-xl w-full max-w-3xl h-[80vh] relative">
      <button
        @click="close"
        class="absolute top-2 right-10 text-gray-500 hover:text-primary-color text-4xl"
        aria-label="Fermer"
      >
        &times;
      </button>

      <iframe
        :src="url"
        class="w-full h-full rounded-md"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>