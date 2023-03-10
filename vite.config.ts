import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/guide/build.html#library-mode
export default defineConfig({
  plugins: [
    vue(),
    dts({
      beforeWriteFile: (filePath, content) => {
        return {
          filePath: 'dist/vue-define-state.d.ts',
        }
      }
    })
  ],
  build: {
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, './src/defineState.ts'),
      name: 'VueDefineState',
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
