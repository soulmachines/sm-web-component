import { defineConfig, loadEnv } from 'vite';
import preact from '@preact/preset-vite';
import * as path from 'path';
import { createHtmlPlugin } from 'vite-plugin-html';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '');
  const version = env.VERSION || new Date().toISOString();

  return {
    plugins: [preact(), createHtmlPlugin({ template: path.resolve(__dirname, 'index.html') })],
    server: {
      open: '/index.html',
    },
    preview: {
      port: 5050,
    },
    build: {
      manifest: true,
      rollupOptions: {
        input: {
          'web-components': path.resolve(__dirname, 'src', 'web-components'),
        },
        output: {
          entryFileNames: `[name]-${version}.js`,
          assetFileNames: `[name]-${version}.[ext]`,
        },
      },
    },
  };
});
