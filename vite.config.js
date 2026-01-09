import { defineConfig } from 'vite'
import shopify from 'vite-plugin-shopify'
import tailwindcss from '@tailwindcss/vite'
import shopifyClean from '@driver-digital/vite-plugin-shopify-clean'

export default defineConfig({
  plugins: [
    shopify({
      themeRoot: 'theme',
      tunnel: true,
    }),
    tailwindcss(),
    shopifyClean({
      themeRoot: 'theme',
      // manifestFileName: '.vite/manifest.json',
    })
  ],
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
