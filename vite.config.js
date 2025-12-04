import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    base: './', // Ensures relative paths for assets, good for GitHub Pages
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                shop: resolve(__dirname, 'shop.html'),
                social: resolve(__dirname, 'social.html'),
                contact: resolve(__dirname, 'contact.html'),
            },
        },
    },
})
