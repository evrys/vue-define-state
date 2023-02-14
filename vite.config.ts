import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/guide/build.html#library-mode
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, './lib/defineState.ts'),
      name: 'vue-define-state',
      fileName: 'vue-define-state',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
