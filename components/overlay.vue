<script setup>
defineProps({
  title: String,
  description: String,
  image: String,
  isVisible: Boolean
});
</script>

<template>
    <div class="overlay-container">
      <div class="overlay-content">
        <h2 class="overlay-title">Chargement...</h2>
        <p class="overlay-description">Merci de patienter pendant que nous chargeons la page.</p>
        <!-- <img class="overlay-image" src="/imgs/Marwin/BackGround.jpg" alt="Image pendant la transition" /> -->
      </div>
    </div>
  </template>
  
  <style scoped>
  .overlay-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #2C3236; /* Fond noir transparent */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.5s ease-in-out;
  }
  
  .overlay-container.show {
    opacity: 1;
    pointer-events: auto;
  }
  
  .overlay-content {
    text-align: center;
    color: white;
    animation: fadeIn 0.5s ease-in-out;
  }
  
  .overlay-title {
    font-size: 64px;
    font-weight: bold;
  }
  
  .overlay-description {
    margin-top: 1rem;
    font-size: 48px;
  }
  
  .overlay-image {
    margin-top: 1.5rem;
    width: 100px; /* Exemple de taille d'image */
    height: auto;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  </style>
  