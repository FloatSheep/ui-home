import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import path from "path";

const rewriteSlashToIndexHtml = () => {
  return {
    name: 'rewrite-slash-to-index-html',
    apply: 'serve',
    enforce: 'post',
    configureServer(server) {
      // rewrite / as index.html
      server.middlewares.use('/', (req, _, next) => {
        if (req.url === '/') {
          req.url = '/index.html'
        }
        next()
      })
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), rewriteSlashToIndexHtml()],
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer]
    }
  },
  appType: 'mpa',
    build: {
      rollupOptions: {
        input: {
          index: path.resolve(__dirname, 'index.html'),
          nested: path.resolve(__dirname, '404/index.html'),
        }
      }
    }
})
