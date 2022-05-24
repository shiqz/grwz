<template>
    <div id="app">
        <layout-header />
        <div class="main-wrapper">
            <main>
                <div class="container">
                    <slot />
                </div>
            </main>
            <layout-footer />
        </div>
    </div>
</template>