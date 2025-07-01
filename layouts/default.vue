<script setup>
import { ref } from 'vue'
import LegalNotice from '~/components/legalNotice.vue'
import Politics from '~/components/Politics.vue'

const showLegalNotice = ref(false)
const showPolitics = ref(false)

const toggleLegal = () => {
  showLegalNotice.value = true
  showPolitics.value = false
}

const togglePolitics = () => {
  showPolitics.value = true
  showLegalNotice.value = false
}
</script>

<template>
    <!-- <news /> -->
    <Headnav/>
    <!-- <News /> -->
  
    <LegalNotice :visible="showLegalNotice" @close="showLegalNotice = false" />
    <Politics :visible="showPolitics" @close="showPolitics = false" />
    
    <NuxtPage />

    <Footernav 
    @toggle-legal="toggleLegal" 
    @toggle-politics="togglePolitics" />

</template>