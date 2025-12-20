import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  test: {
    include: ['tests/**/*.test.js'],
    environment: 'node'
  },
  plugins: (() => {
    const isTest = process.env.VITEST
    const base = [vue()]
    return isTest ? base : [...base, vueDevTools()]
  })(),
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
