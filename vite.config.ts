import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import yaml from '@modyfi/vite-plugin-yaml'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/chat/',

  server: {
    fs: {
      strict: false,
    },
  },

  resolve: {
    dedupe: ['vue'],
  },

  plugins: [
    vue(),
    yaml(),
  ],
})
