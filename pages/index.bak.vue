<script setup>
import { ref, h } from 'vue'
import tools from '~~/common/tools'
import { LoadingOutlined } from '@ant-design/icons-vue'
const route = useRoute()
const page = ref(tools.intval(route.query.page || 1))
const { data: data, pending, refresh } = await useFetch(() => `/api/articles?scene=new&page=${page.value}`)


// 分页
const loadMore = () => {
    page.value += 1
    refresh()
}
const indicator = h(LoadingOutlined, {
    style: {
        fontSize: '24px',
    },
    spin: true,
})
</script>


<template>
    <div class="content">
        <div class="page-head">
            <h3 class="title">最新发布</h3>
        </div>
        <article-item v-for="(item, key) in data.list" :key="key" :info="item"></article-item>
        <a-spin v-if="pending" :indicator="indicator" />
        <a-button v-else-if="data.more" @click="loadMore">加载更多</a-button>
        <a-divider class="color-desc" v-else dashed orientation="left" :plain="true">没有更多了</a-divider>
    </div>
</template>