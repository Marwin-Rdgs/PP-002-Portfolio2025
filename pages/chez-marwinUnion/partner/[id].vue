<script setup>
import { useRoute } from 'vue-router'
import partnerListRaw from '@/data/partners.json'

const route = useRoute()
const partnerId = route.params.id

const partner = partnerListRaw.find(p => p.id === partnerId)
</script>

<template>
    <h1>{{ partner.name }}</h1>
</template>