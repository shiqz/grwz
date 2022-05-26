<script setup>
const recArticles = useState('articles', () => [])
const { data: recommends } = await useFetch(() => `/api/articles?secen=recommend&page=1`)
recArticles.value = recommends.list || []
console.log(recArticles.value)
</script>
<template>
    <aside class="flex-no-shrink">
        <div class="panel">
            <div class="head">
                <h3 class="title">推荐文章</h3>
            </div>
            <div class="body">
                <article-item v-for="(item, key) in recArticles" :key="key" :info="item" type="cell-item">
                </article-item>
            </div>
        </div>
    </aside>
</template>