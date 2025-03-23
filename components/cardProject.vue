<script>
export default {
    props: {
        title: {
            type: String,
            default: "Projet",
        },
        img: {
            type: String,
            required: true, // L'image doit être fournie
        },
        alt: {
            type: String,
            default: "Image du projet",
        },
        link: {
            type: String,
            default: "#",
        },
    }
};
</script>

<template>
    <RouterLink :to="link" class="group w-[128px] h-[180px] relative overflow-hidden phone:px-[50%] desktop:px-[10%] rounded-xl border-2 border-primary-color border-opacity-15">
        <!-- Image en arrière-plan -->
        <img :src="img" :alt="alt" class="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0"/>
        <!-- Titre en bas -->
        <h1 class="absolute inset-x-0 bottom-0 text-white text-center bg-black/50 p-2 z-10 font-Primary font-extrabold text-primary-color bg-light-color bg-opacity-25">
            {{ title }}
        </h1>
    </RouterLink>
</template>
