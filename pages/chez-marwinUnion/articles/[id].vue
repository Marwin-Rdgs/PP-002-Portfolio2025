<script setup>
import { useRoute } from 'vue-router'
import articleListRaw from '@/data/CMU-articles.json'

const route = useRoute()
const articleId = route.params.id

const article = articleListRaw.find(a => a.id === articleId)
</script>

<template>
    <h1>Page de présentation d'un article</h1>
    <h2>{{ article.title }}</h2>
</template>