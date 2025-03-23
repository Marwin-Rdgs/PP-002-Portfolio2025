<script setup>
import {ref} from 'vue';

const showQuestion1 = ref(false);
const showQuestion2 = ref(false);
const showQuestion3 = ref(false);

defineProps({
  question1: {
    type: String,
    default: "Exemple de question"
  },
  question2: {
    type: String,
    default: "Exemple de question"
  },
  question3: {
    type: String,
    default: "Exemple de question"
  },
  reponse1: {
    type: String,
    default: "Exemple de réponse"
  },
  reponse2: {
    type: String,
    default: "Exemple de réponse"
  },
  reponse3: {
    type: String,
    default: "Exemple de réponse"
  }
});
</script>

<template>
    <div class="desktop:ml-[8%]">
        <h1 class="-mb-2 font-Secondary font-bold text-dark-color text-opacity-50">Marwin RODRIGUES</h1>
        <h2 class="desktop:text-5xl phone:text-xl font-Primary desktop:w-[400px] text-primary-color">Vos questions, mes réponses</h2>

        <div class="grid gap-8 mt-[4%]">
            <div>
                <div class="flex items-center cursor-pointer hover:opacity-90 hover:scale-110 transition-all ease-in-out duration-200" @click="showQuestion1=!showQuestion1" :class="{ 'opacity-100': showQuestion1, 'opacity-70': !showQuestion1 }">
                    <img src="/icons/toggle.svg" alt="" class="w-[32px]">
                    <p class="text-lg font-Primary text-dark-color font-medium">{{ question1 }}</p>
                </div>
                    <p v-if="showQuestion1==true" class="text-sm text-dark-color text-opacity-85 font-Secondary">{{ reponse1 }}</p>
            </div>

            <div>
                <div class="flex items-center cursor-pointer hover:opacity-90 hover:scale-110 transition-all ease-in-out duration-200" @click="showQuestion2=!showQuestion2" :class="{ 'opacity-100': showQuestion2, 'opacity-70': !showQuestion2 }">
                    <img src="/icons/toggle.svg" alt="" class="w-[32px]">
                    <p class="text-lg font-Primary text-dark-color font-medium">{{ question2 }}</p>
                </div>
                    <p v-if="showQuestion2==true" class="text-sm text-dark-color text-opacity-85 font-Secondary">{{ reponse2 }}</p>
            </div>
            <div>
                <div class="flex items-center cursor-pointer hover:opacity-90 hover:scale-110 transition-all ease-in-out duration-200" @click="showQuestion3=!showQuestion3" :class="{ 'opacity-100': showQuestion3, 'opacity-70': !showQuestion3 }">
                    <img src="/icons/toggle.svg" alt="" class="w-[32px]">
                    <p class="text-lg font-Primary text-dark-color font-medium">{{ question3 }}</p>
                </div>
                    <p v-if="showQuestion3==true" class="text-sm text-dark-color text-opacity-85 font-Secondary">{{ reponse3 }}</p>
            </div>



        </div>
    </div>
</template>