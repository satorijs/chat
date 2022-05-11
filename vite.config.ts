import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import yaml from '@modyfi/vite-plugin-yaml'
import { readdirSync } from 'fs'

const extensions = readdirSync(__dirname + '/extensions')

// https://vitejs.dev/config/
export default defineConfig({
  base: '/chat/',

  server: {
    fs: {
      strict: false,
    },
  },

  define: {
    SATORI_EXTENSIONS: extensions,
  },

  resolve: {
    dedupe: ['vue'],
  },

  plugins: [
    vue(),
    yaml(),
  ],
})
