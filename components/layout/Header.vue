<template>
    <header>
        <div class="nav-bar">
            <div class="container flex-sbt">
                <nav class="flex-row">
                    <nuxt-link to="/" class="nav-title flex-no-shrink">
                        <img src="/images/logo.png" alt="">
                        <span>永不言弃</span>
                    </nuxt-link>
                    <nuxt-link to="/">首页</nuxt-link>
                    <nuxt-link to="/">我的博客</nuxt-link>
                    <nuxt-link to="/">相册</nuxt-link>
                    <nuxt-link to="/">留言板</nuxt-link>
                    <nuxt-link to="/about">关于我</nuxt-link>
                </nav>

                <nav>
                    <nuxt-link to="/">登录</nuxt-link>
                </nav>
            </div>
        </div>
    </header>
</template>