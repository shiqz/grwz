import { defineNuxtConfig } from 'nuxt'
import env from './env'
import process from 'process'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    baseUr: env[process.env.NODE_ENV].API_URL,
    css: ['~/assets/css/index.less'],
    env: {
        NODE_ENV: process.env.NODE_ENV,
        API_URL: env[process.env.NODE_ENV].API_URL,
    },
    runtimeConfig: {
        apiSecret: env[process.env.NODE_ENV].API_SECRET,
        public: {
            apiBase: env[process.env.NODE_ENV].API_URL,
        },
    },
})
