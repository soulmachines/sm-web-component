import { defineConfig, loadEnv } from 'vite';
import preact from '@preact/preset-vite';
import * as path from 'path';
import { createHtmlPlugin } from 'vite-plugin-html';

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '');
  const version = env.VERSION || new Date().getTime();

  const defaultConfig = {
    define: {
      // As of vite 3, process.env are kept in library mode
      // Replaces process.env.NODE_ENV in the code with the current mode (eg: production or development)
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    },
    plugins: [preact()],
    preview: {
      port: 5050,
    },
    build: {
      rollupOptions: {
        output: {
          entryFileNames: `web-components.${version}.js`,
          assetFileNames: `web-components.${version}.[ext]`,
        },
      },
    },
  };

  // Config split as issue with vite deleting the index.html file
  if (command === 'build') {
    // Production builds UMD bundle and generates a manifest
    return {
      ...defaultConfig,
      build: {
        ...defaultConfig.build,
        manifest: true,
        lib: {
          entry: path.resolve(__dirname, 'src/web-components'),
          name: 'soulmachines-web-components',
          formats: ['umd'],
        },
      },
    };
  } else {
    // When serving the code locally use es modules and run the HTML plugin
    return {
      ...defaultConfig,
      plugins: [
        ...defaultConfig.plugins,
        // Injects env into our example files
        createHtmlPlugin({ template: path.resolve(__dirname, 'index.html') }),
      ],
      server: {
        open: '/index.html',
        port: 3000,
      },
      build: {
        rollupOptions: {
          ...defaultConfig.build.rollupOptions,
          input: {
            'web-components': path.resolve(__dirname, 'src', 'web-components'),
          },
        },
      },
    };
  }
});
