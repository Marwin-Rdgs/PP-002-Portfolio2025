<script setup>
import { useRoute } from 'vue-router'
import projectListRaw from '@/data/projectList.json'

const route = useRoute()
const projectId = route.params.id

const project = projectListRaw.find(p => p.id === projectId)
</script>

<template>
    <h1>Page de présentation d'un projet</h1>
    <h2>{{ project.title }}</h2>
</template>