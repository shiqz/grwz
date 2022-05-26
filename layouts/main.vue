<template>
    <div id="app">
        <layout-header />
        <div class="main-wrapper">
            <main class="container">
                <a-row :gutter="[16, 16]">
                    <a-col :sm="24" :md="18">
                        <slot></slot>
                    </a-col>
                    <a-col :sm="24" :md="6">
                        <layout-aside />
                    </a-col>
                </a-row>
            </main>
            <layout-footer />
        </div>
    </div>
</template>