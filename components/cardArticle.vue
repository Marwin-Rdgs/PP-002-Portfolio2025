<script setup>
defineProps({
  article: {
    type: Object,
    required: true,
  },
})

/**
 * Fonction pour couper l’intro à X mots (25 ici).
 */
const truncateIntro = (text, wordLimit = 25) => {
  if (!text) return ''
  const words = text.split(' ')
  return words.length > wordLimit
    ? words.slice(0, wordLimit).join(' ') + '…'
    : text
}
</script>

<template>
  <div class="relative bg-white rounded-2xl shadow-md overflow-hidden transition-transform transform hover:scale-[1.02] hover:shadow-xl duration-300 group">

    <!-- Badge NEWS -->
    <div v-if="article.new" class="absolute top-[10%] left-3 bg-red-500 text-light-color bg-primary-color text-xs font-semibold px-3 py-1 rounded-full z-10 shadow-sm animate-bounce">
      NEWS
    </div>

    <!-- Image avec effet pulse -->
    <img loading="lazy"
      :src="article.cover"
      :alt="article.title"
      class="w-full h-52 object-cover group-hover:animate-pulse transition duration-200"
    />

    <!-- Contenu -->
    <div class="p-4 space-y-2">
      <h2 class="text-lg font-semibold text-gray-900">{{ article.title }}</h2>
      <p class="text-sm text-gray-600">
        {{ truncateIntro(article.intro) }}
      </p>
      <div class="flex justify-end">
        <NuxtLink
          :to="`/chez-marwinUnion/articles/${article.id}`"
          class="text-blue-600 text-sm font-medium hover:underline"
        >
          Lire l'article →
        </NuxtLink>
      </div>
    </div>
    
  </div>
</template>
