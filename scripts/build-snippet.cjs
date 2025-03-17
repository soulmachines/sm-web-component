try {
  require('dotenv').config();
  const shell = require('shelljs');
  const manifest = require('../dist/.vite/manifest.json');
  const cdnUrl = process.env.CDN_ENDPOINT || '';
  const version = process.env.VERSION || 'unknown';
  const jsManifest = manifest['src/web-components/index.ts'];
  const styleManifest = manifest['style.css'];
  let jsFileName = cdnUrl + jsManifest.file;
  let cssFileName = cdnUrl + styleManifest.file;

  shell.exec(
    `npx plop widget-snippet --plopfile generators/index.cjs -- --javascriptFileName ${jsFileName} --cssFileName ${cssFileName} --version ${version}`,
  );
} catch (error) {
  console.error(`Something went wrong: ${error}`);
}
