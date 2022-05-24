<script setup>
const { data: data } = await useFetch('/api/articles')
</script>

<template>
    <div class="page-wrapper">
        <div class="page-head">
            <h3 class="title">最新发布</h3>
        </div>
        <div class="page-body">
            <div class="content">
                <article-item v-for="(item, key) in data" :key="key" :info="item"></article-item>
            </div>
            <layout-aside />
        </div>
    </div>

</template>