<template>
    <div>
        <layout-header />
        <div class="main-wrapper">
            <main>
                <div class="container flex">
                    <div class="content">
                        <slot />
                    </div>
                    <layout-aside />
                </div>
            </main>
            <layout-footer />
        </div>

    </div>
</template>