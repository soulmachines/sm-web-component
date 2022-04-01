import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  build: {
    rollupOptions: {
      input: {
        // Files listed here will be bundled individually
        'sm-video': path.resolve(__dirname, 'src', 'web-components', 'register-sm-video.tsx'),
      },
    },
  },
});
