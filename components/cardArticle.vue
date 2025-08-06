<script setup>
defineProps({
  article: {
    type: Object,
    required: true,
  },
})
</script>

<template>
    <div class="grid grid-cols-2 group gap-y-[6%] desktop:mx-[4%] phone:mx-[10%]">
        <img src="/imgs/projects/footer_wave.jpg" :alt="artocme" class="col-span-2 rounded-2xl group-hover:animate-pulse">
        <div class="col-span-2 flex justify-between items-center">
          <h2>{{article.title}}</h2>
          <NuxtLink :to="`/chez-marwinUnion/articles/${article.id}`"><p>lire l'article</p></NuxtLink>
        </div>
    </div>
</template>