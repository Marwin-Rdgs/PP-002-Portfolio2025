<template>
    <div id="app">
      <!-- Intégration du composant d'overlay -->
      <Overlay />
  
      <!-- Wrapper global de Barba -->
      <div id="barba-wrapper" data-barba="wrapper">
        <!-- Conteneur de chaque page -->
        <div data-barba="container">
          <NuxtPage />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import Overlay from '~/components/Overlay.vue';
  </script>
  