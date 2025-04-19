<script setup>
defineProps({
  feedback: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="bg-white rounded-3xl shadow-xl p-5 md:p-6 max-w-md mx-auto border-2 border-primary-color border-opacity-20">
    <img
      :src="feedback.img"
      :alt="feedback.auteur"
      class="w-full h-48 object-cover rounded-xl shadow-lg shadow-contrast-color"
    />
    <div class="h-1 bg-yellow-400 mt-4 mb-6 rounded-full border-[2px] border-primary-color"></div>
    <p class="text-gray-800 text-sm md:text-base leading-relaxed mb-6">
      {{ feedback.comments }}
    </p>
    <div class="text-sm text-gray-700 font-semibold">
      - {{ feedback.auteur }}
    </div>
    <div class="text-xs text-gray-500">
      {{ feedback.poste }} chez
      <a :href="feedback.link" target="_blank" class="text-blue-600 hover:underline">
        {{ feedback.entreprise }}
      </a>
    </div>
  </div>
</template>
