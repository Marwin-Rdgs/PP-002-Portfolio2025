<script setup>
defineProps({
  article: {
    type: Object,
    required: true,
  },
})
</script>

<template>
    <div class="grid grid-cols-2 group hover:animate-pulse">
        <img src="/imgs/projects/footer_wave.jpg" alt="" class="col-span-2 rounded-2xl group-hover:animate-bounce">
        <h2>{{article.title}}</h2>
        <NuxtLink :to="`/chez-marwinUnion/articles/${article.id}`"><p>lire l'article</p></NuxtLink>
    </div>
</template>