<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import Mail from '~/components/Mail.vue'

const form = ref({
  name: '',
  email: '',
  message: ''
})
const loading = ref(false)
const success = ref(false)

// Pour gérer l'état de focus
const isFormFocused = ref(false)

const handleFocus = () => {
  isFormFocused.value = true
}

const handleBlur = () => {
  isFormFocused.value = false
}

// Empêche le scroll horizontal quand un champ est focus
watch(isFormFocused, (focused) => {
  if (focused) {
    document.body.classList.add('overflow-x-hidden')
  } else {
    document.body.classList.remove('overflow-x-hidden')
  }
})

// Nettoyage si le composant est démonté
onBeforeUnmount(() => {
  document.body.classList.remove('overflow-x-hidden')
})

const handleSubmit = async () => {
  loading.value = true
  try {
    const response = await fetch('https://formspree.io/f/xblokwvg', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form.value)
    })

    if (response.ok) {
      success.value = true
      form.value = { name: '', email: '', message: '' }
    } else {
      alert('Une erreur est survenue. Veuillez réessayer.')
    }
  } catch (error) {
    alert('Erreur réseau. Vérifiez votre connexion.')
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <section class="flex flex-col justify-center mx-[4%] items-center mt-[4%] overflow-x-hidden">
    <h1 class="text-5xl font-Primary font-bold text-primary-color ml-[2%]">Me contacter</h1>
    
    <div class="w-2/3 px-4 py-12 relative mt-[2%]">

      <form @submit.prevent="handleSubmit" class="space-y-6">
        <div>
          <label for="name" class="block text-sm font-medium font-Primary text-dark-color">Nom</label>
          <input
            v-model="form.name"
            @focus="handleFocus"
            @blur="handleBlur"
            type="text"
            id="name"
            name="name"
            required
            class="mt-1 block w-full border border-dark-color rounded-md p-2 font-Secondary focus:outline-none focus:ring-2 focus:ring-secondary-color"
          />
        </div>

        <div>
          <label for="email" class="block text-sm font-medium font-Primary text-dark-color">Email</label>
          <input
            v-model="form.email"
            @focus="handleFocus"
            @blur="handleBlur"
            type="email"
            id="email"
            name="email"
            required
            class="mt-1 block w-full border border-dark-color rounded-md p-2 font-Secondary focus:outline-none focus:ring-2 focus:ring-secondary-color"
          />
        </div>

        <div>
          <label for="message" class="block text-sm font-medium font-Primary text-dark-color">Message</label>
          <textarea
            v-model="form.message"
            @focus="handleFocus"
            @blur="handleBlur"
            id="message"
            name="message"
            rows="5"
            required
            class="mt-1 block w-full border border-dark-color rounded-md p-2 font-Secondary focus:outline-none focus:ring-2 focus:ring-secondary-color"
          ></textarea>
        </div>

        <!-- Honeypot anti-bot -->
        <input type="text" name="_gotcha" class="hidden" />

        <div class="text-center">
          <button
            type="submit"
            :disabled="loading"
            class="bg-primary-color bg-opacity-15 scale-100 text-dark-color px-6 py-2 rounded-md ring-1 hover:shadow-xl hover:scale-110 hover:-translate-y-2 shadow-primary-color hover:bg-opacity-60 ring-secondary-color hover:ring-primary-color transition-all delay-75 disabled:opacity-50 desktop:mr-[100%]"
          >
            {{ loading ? 'Envoi en cours...' : 'Envoyer' }}
          </button>
        </div>
      </form>

      <!-- Pop-up de confirmation -->
      <Mail :show="success" @close="success = false" />
    </div>

    <!-- Image animée -->
    <img
      src="/public/imgs/Marwin/PhoneMarwin.png"
      alt=""
      :class="[
        'absolute desktop:right-[6%] phone:right-0 desktop:top-[24%] phone:top-[20%] desktop:h-3/4 phone:h-1/3 transition-all duration-500 ease-in-out z-10',
        isFormFocused ? 'translate-x-[35%] opacity-70' : 'translate-x-0 opacity-100'
      ]"
    />

    <div class="border-2 border-primary-color shadow-primary-color drop-shadow-2xl px-[2%] py-[3%] mt-6 w-full max-w-2xl">
      <h2 class="text-xl font-bold font-Primary text-primary-color mb-2">Informations de contact</h2>
      <div class="mb-1">
        <a href="mailto:contact@marwin-rodrigues.fr"><p>contact@marwin-rodrigues.fr</p></a>
      </div>
      <div class="mb-1">
        <p>Montbéliard / Strasbourg / Divonne-les-bains</p>
      </div>
      <div class="mb-4">
        <a href="tel:661012019"><p>+33 6 61 01 20 19</p></a>
      </div>

      <h3 class="text-lg font-semibold font-Primary text-dark-color">Réseaux sociaux</h3>
      <div class="flex mt-2">
        <!-- Ajoute ici tes icônes de réseaux sociaux -->
      </div>
    </div>
  </section>
</template>
