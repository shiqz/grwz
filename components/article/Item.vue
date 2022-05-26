<script setup>
import tools from '~~/common/tools'
const props = defineProps(['info', 'type'])
</script>

<template>
    <article class="cell-item" v-if="type == 'cell-item'">
        <nuxt-link :to="`/article/${info.guid}.html`">{{ info.title }}</nuxt-link>
    </article>
    <article class="item" v-else>
        <h3 class="title">
            <nuxt-link :to="`/article/${info.guid}.html`">{{ info.title }}</nuxt-link>
        </h3>
        <section class="desc" v-if="info.desc">{{ info.desc }}</section>
        <div class="post-meta">
            <div class="label-item">
                <i class="iconfont icon-date"></i>
                <span class="text">{{ tools.formatDate(info.created_at) }}</span>
            </div>
            <div class="label-item">
                <i class="iconfont icon-liulan"></i>
                <span class="text">{{ info.view_num }}</span>
            </div>
        </div>
    </article>
</template>