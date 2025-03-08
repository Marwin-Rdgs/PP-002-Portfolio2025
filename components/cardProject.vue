<script>
export default {
    props: {
         title: {
            type: String,
            default: "Projet",
        },
        description: {
            type: String,
            default: "description du Projet"
        },
        link: {
            type: String,
            default: "#",
        },
        tag : {
            type: String,
        },
        img : {
            type: String,
        }
    },
};
</script>

<template>
    <div class="group w-[128px] ">
        <div class="relative">
            <img src="/public/imgs/projects/emorphoz.gif" alt="" class="absolute w-full h-full z-0 grayscale group-hover:grayscale-0">
            <h1 class="z-10">fldgkdfjkghjdkhjfjkdqhdjkshtest</h1>
        </div>
    </div>
</template>