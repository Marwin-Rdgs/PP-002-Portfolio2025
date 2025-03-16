<script>
export default {
    props: {
        nom: {
            type: String,
            required: true,
        },
        poste: {
            type: String,
        },
        secteur: {
            type: String,
            default: "MMI Montbéliard",
        },
        link: {
            type: String,
            default: "#",
        },
        comments: {
            type: String,
            required: true,
        },
        img: {
            type: String,
            required: true,
        }
    }
};
</script>

<template>
    <div class="relative w-full phone:p-[5%] desktop:p-6 bg-black/50 rounded-lg overflow-hidden">
        <!-- Image en arrière-plan -->
        <img :src="img" :alt="nom" class="absolute inset-0 w-full h-full object-cover object-top z-0 opacity-50" />
        
        <!-- Contenu au premier plan -->
        <div class="relative z-10 text-white desktop:p-[2%]">
            <h1 class="font-Primary phone:text-sm desktop:text-lg font-bold text-center">{{ nom }}</h1>
            <h1 class="font-Primary phone:text-xs desktop:text-sm font-bold text-center">{{ poste }} - <a :href="link" class="underline">{{ secteur }}</a></h1>
            <p class="font-Secondary phone:text-xs desktop:text-sm font-medium mt-2 text-justify">{{ comments }}</p>
        </div>
    </div>
</template>
