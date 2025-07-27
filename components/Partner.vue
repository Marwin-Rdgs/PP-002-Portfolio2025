<script setup>
defineProps({
  partner: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <NuxtLink :to="`partner/${partner.id}`">
    <div class="w-[128px] group rounded-t-full border-2 border-secondary-color border-opacity-25 hover:animate-pulse hover:shadow-2xl transition-all duration-300">
      <img :src="partner.logo" :alt="partner.name" class="rounded-full" />
      <h3 class="text-center text-sm font-Primary font-medium group-hover:font-bold transition-all duration-500">
        {{ partner.name }}
      </h3>
    </div>
  </NuxtLink>
</template>
