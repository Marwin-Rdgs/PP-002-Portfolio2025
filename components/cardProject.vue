<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
  },
})
</script>

<template>
    <NuxtLink :to="`/projects/${project.id}`" class="group w-[128px] h-[180px] relative overflow-hidden phone:px-[50%] desktop:px-[10%] rounded-xl border-2 border-primary-color border-opacity-15">
        <!-- Image en arrière-plan -->
        <img :src="project.img" :alt="project.alt" class="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0"/>
        <!-- Titre en bas -->
        <h2 class="absolute inset-x-0 bottom-0 text-white text-center bg-black/50 p-2 z-10 font-Primary font-extrabold text-primary-color bg-light-color bg-opacity-25">
            {{ project.title }}
        </h2>
    </NuxtLink>
</template>