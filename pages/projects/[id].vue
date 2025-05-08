<script setup>
import { useRoute } from 'vue-router'
import projectListRaw from '@/data/projectList.json'

const route = useRoute()
const projectId = route.params.id

const project = projectListRaw.find(p => p.id === projectId)
</script>

<template>
    <section>
        <img :src="project.img" alt="" class="w-full h-full">
    </section>

    <h2>{{ project.title }}</h2>
</template>