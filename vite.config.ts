import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/01-vue-component-communication/',
  plugins: [vue()],
  build: {
    assetsDir: './'
  }
});
