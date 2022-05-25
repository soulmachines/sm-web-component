import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
const path = require('path');
import { createHtmlPlugin } from 'vite-plugin-html';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact(), createHtmlPlugin({ template: path.resolve(__dirname, 'index.html') })],
  server: {
    open: '/index.html',
  },
  preview: {
    port: 3000,
  },
  build: {
    manifest: true,
    rollupOptions: {
      input: {
        'web-components': path.resolve(__dirname, 'src', 'web-components'),
      },
    },
  },
});
