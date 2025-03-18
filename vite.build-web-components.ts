import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig, loadEnv, UserConfig } from 'vite';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import preact from '@preact/preset-vite';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '');
  const version = env.VERSION || new Date().getTime();

  const config: UserConfig = {
    plugins: [
      // bundle the css into the js files for web components
      // so they are published as a single stand-alone file
      cssInjectedByJsPlugin(),
      // use preact for smaller bundle sizes
      preact(),
    ],
    build: {
      lib: {
        entry: resolve(__dirname, 'src/web-components.entry.ts'),
        name: 'web-components',
        fileName: `web-components.${version}`,
        formats: ['es'],
      },
      rollupOptions: {
        output: {
          dir: resolve(__dirname, 'dist/web-components'),
        },
      },
    },
  };

  return config;
});
