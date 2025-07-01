<script setup>
import { ref } from 'vue'
import Mail from '~/components/Mail.vue'

const form = ref({
  name: '',
  email: '',
  message: ''
})
const loading = ref(false)
const success = ref(false)

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
  <section class="grid desktop:grid-cols-2 mx-[4%] items-center">
  <div class="max-w-2xl px-4 py-12">

    <form @submit.prevent="handleSubmit" class="space-y-6">
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700">Nom</label>
        <input
          v-model="form.name"
          type="text"
          id="name"
          name="name"
          required
          class="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
        <input
          v-model="form.email"
          type="email"
          id="email"
          name="email"
          required
          class="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
        <textarea
          v-model="form.message"
          id="message"
          name="message"
          rows="5"
          required
          class="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>

      <!-- Honeypot anti-bot -->
      <input type="text" name="_gotcha" class="hidden" />

      <div class="text-center">
        <button
          type="submit"
          :disabled="loading"
          class="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition disabled:opacity-50"
        >
          {{ loading ? 'Envoi en cours...' : 'Envoyer' }}
        </button>
      </div>
    </form>

    <!-- Pop-up de confirmation -->
    <Mail :show="success" @close="success = false" />
  </div>

  <div class="border-2 border-primary-color shadow-primary-color drop-shadow-2xl px-[2%] py-[3%]">
    <h2>Informations de contact</h2>
    <div>
      <a href="mailto:contact@marwin-rodrigues.fr"><p>contact@marwin-rodrigues.fr</p></a>
    </div>
    <div>
      <p>Montbéliard / Strasbourg / Divonne-les-bains</p>
    </div>
    <div>
      <a href="tel:661012019"><p>+33 6 61 01 20 19</p></a>
    </div>

    <h3>réseaux sociaux</h3>
    <div class="flex">

    </div>
  </div>
  </section>

</template>
