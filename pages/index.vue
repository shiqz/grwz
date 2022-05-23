<script setup>
const { data: data } = await useFetch('/api/articles')
</script>

<template>
    <div>
        <div class="panel">
            <div class="head">
                <h3 class="title">最新发布</h3>
            </div>
            <div class="body">
                <article-item v-for="(item, key) in data" :key="key" :info="item"></article-item>
            </div>
        </div>
    </div>
</template>