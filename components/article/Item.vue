<script setup>
import tools from '~~/common/tools'

defineProps(['info'])
</script>

<template>
    <article class="item">
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