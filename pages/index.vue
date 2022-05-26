<script setup>
import { h, toRefs, reactive } from 'vue'
import tools from '~~/common/tools'
import { LoadingOutlined } from '@ant-design/icons-vue'

const route = useRoute()
const articles = useState('articles', () => [])
const {
    more, page, indicator
} = toRefs(reactive({
    more: false,
    page: tools.intval(route.query.page || 1),
    indicator: h(LoadingOutlined, {
        style: { fontSize: '24px' },
        spin: true,
    })
}))

// 加载数据
const { data: result, pending, refresh } = await useFetch(() => `/api/articles?page=${page.value}`)
articles.value = result.value.list
more.value = result.value.more
watch(result, (newData) => {
    articles.value = [...articles.value, ...result.value.list]
    more.value = result.value.more
})

// 加载更多
const loadMore = () => {
    page.value += 1
    refresh()
}
</script>

<template>
    <div class="content">
        <div class="page-head">
            <h3 class="title">最新发布</h3>
        </div>
        <div class="list">
            <article-item v-for="(item, key) in articles" :key="key" :info="item"></article-item>
        </div>
        <a-button class="mt-10" v-if="more" @click="loadMore" :loading="pending" block>加载更多</a-button>
        <a-divider v-else class="color-desc" dashed orientation="left" :plain="true">没有更多了</a-divider>
    </div>
</template>