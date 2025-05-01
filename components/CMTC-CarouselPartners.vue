<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  partners: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="overflow-x-auto mt-6 mb-6">
    <div class="flex gap-4 w-max px-2">
      <a
        v-for="(partner, index) in partners"
        :key="index"
        :href="partner.link"
        target="_blank"
        rel="noopener"
        class="flex-shrink-0 w-20 h-20 rounded-full overflow-hidden border-2 border-primary-color hover:scale-105 transition-transform duration-300"
      >
        <img :src="partner.logo" :alt="partner.name" class="w-full h-full object-cover" />
      </a>
    </div>
  </div>
</template>
