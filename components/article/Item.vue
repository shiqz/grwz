<script setup>
defineProps(['info'])
</script>

<template>
    <article class="item">
        <h3 class="title">
            <nuxt-link :to="`/article/${info.guid}.html`">{{ info.title }}</nuxt-link>
        </h3>
    </article>
</template>