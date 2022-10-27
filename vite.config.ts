import { defineConfig, loadEnv } from 'vite';
import preact from '@preact/preset-vite';
import * as path from 'path';
import { createHtmlPlugin } from 'vite-plugin-html';
import dns from 'dns';

// https://vitejs.dev/config/server-options.html#server-host
// Fixes issue where server opens at 127.0.0.1 instead of localhost
dns.setDefaultResultOrder('verbatim');

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '');
  const version = env.VERSION || new Date().getTime();
  let developmentPlugins = [];

  if (mode === 'development') {
    developmentPlugins = [
      // Injects env into our example files
      createHtmlPlugin({ template: path.resolve(__dirname, 'index.html') }),
    ];
  }

  return {
    define: {
      // As of vite 3, process.env are kept in library mode
      // Replaces process.env.NODE_ENV in the code with the current mode (eg: production or development)
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    },
    esbuild: {
      // Ignore warning https://github.com/vitejs/vite/issues/8644#issuecomment-1159308803
      logOverride: { 'this-is-undefined-in-esm': 'silent' },
    },
    plugins: [preact(), ...developmentPlugins],
    server: {
      open: '/index.html',
      port: 3000,
    },
    preview: {
      port: 5050,
    },
    build: {
      manifest: true,
      lib: {
        entry: path.resolve(__dirname, 'src/web-components'),
        name: 'soulmachines-web-components',
        formats: ['umd'],
      },
      rollupOptions: {
        output: {
          entryFileNames: `web-components.${version}.js`,
          assetFileNames: `web-components.${version}.[ext]`,
        },
      },
    },
  };
});
