<template>
    <header class="grid grid-cols-3 pt-[1%] items-center bg-light-color">
       <NuxtLink to="/"> <h1 class="ml-[4%] font-Primary font-bold text-2xl text-dark-color hover:animate-pulse">MarwinR.</h1></NuxtLink>
        <ul class="flex justify-center gap-10">
            <li class="font-Secondary font-semibold text-lg text-dark-color opacity-100 hover:opacity-70"><NuxtLink to="veille">Veille</NuxtLink></li>
            <li class="font-Secondary font-semibold text-lg text-dark-color opacity-100 hover:opacity-70"><NuxtLink to="projets/">Projets</NuxtLink></li>
            <li class="font-Secondary font-semibold text-lg text-dark-color opacity-100 hover:opacity-70"><NuxtLink to="about">À Propos</NuxtLink></li>
        </ul>
        <div class="flex justify-center gap-[10%]">
            <NuxtLink to="chez-marwinweb"><button class="bg-primary-color px-6 py-2 rounded-3xl text-lg font-Secondary font-bold text-contrast-color bg-opacity-100 hover:bg-opacity-70 hover:-translate-y-1 hover:shadow-lg hover:shadow-secondary-color">Chez Marwin-web</button></NuxtLink>
            <NuxtLink to="contact"><button class="bg-primary-color px-6 py-2 rounded-3xl text-lg font-Secondary font-bold text-contrast-color bg-opacity-100 hover:bg-opacity-70 hover:-translate-y-1 hover:shadow-lg hover:shadow-secondary-color">Let's talk</button></NuxtLink>
        </div>
    </header>
</template>