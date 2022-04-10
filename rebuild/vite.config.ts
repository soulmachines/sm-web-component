/* eslint-disable @typescript-eslint/no-var-requires */
import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
const path = require('path');
import { createHtmlPlugin } from 'vite-plugin-html';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact(), createHtmlPlugin()],
  build: {
    rollupOptions: {
      input: {
        // Files listed here will be bundled individually
        'sm-video': path.resolve(__dirname, 'src', 'web-components', 'sm-video.tsx'),
      },
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://localhost:44305',
        changeOrigin: true,
        secure: false,
        ws: true,
      },
    },
  },
});
