import { defineConfig } from 'vite'
import shopify from 'vite-plugin-shopify'
import shopifyClean from '@driver-digital/vite-plugin-shopify-clean'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

export default defineConfig({
  plugins: [
    shopify({
      themeRoot: 'theme',
      tunnel: true,
    }),
    shopifyClean({
      themeRoot: 'theme',
      // manifestFileName: '.vite/manifest.json',
    })
  ],
  css: {
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer,
      ],
    },
  },
  build: {
    emptyOutDir: false,
    sourcemap: true,
  },
  server: {
    allowedHosts: [".trycloudflare.com"],
    cors: { 
      origin: [
        /^https?:\/\/(?:(?:[^:]+\.)?localhost|127\.0\.0\.1|\[::1\])(?::\d+)?$/,
        /^https?:\/\/[^/]+\.myshopify\.com$/,
        /^https?:\/\/[^/]+\.myshopifyapps\.com$/,
      ]
    } 
  } 
})
