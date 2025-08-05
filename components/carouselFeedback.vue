<script setup>
import { ref, onMounted } from 'vue'
import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'

const props = defineProps({
  feedbacks: {
    type: Array,
    required: true,
  },
})

const swiperRef = ref(null)

onMounted(() => {
  new Swiper(swiperRef.value, {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 20,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
})
</script>

<template>
  <div class="max-w-6xl mx-auto px-4">
    <div ref="swiperRef" class="swiper">
      <div class="swiper-wrapper mb-16">
        <div v-for="(feedback, index) in feedbacks" :key="index" class="swiper-slide">
          <CardFeedback :feedback="feedback" />
        </div>
      </div>
    </div>
  </div>
</template>