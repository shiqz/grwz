<script setup>
definePageMeta({
    title: 'My home page'
})
const route = useRoute()

console.log(route.meta.title)
</script>

<template>
    <div>
        <!-- This page correctly has only one single root element -->
        ID
    </div>
</template>