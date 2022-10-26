try {
  require('dotenv').config();
  const shell = require('shelljs');
  const manifest = require('../dist/manifest.json');
  const cdnUrl = process.env.CDN_ENDPOINT || '';
  const version = process.env.VERSION || 'unknown';
  const manifestItems = manifest['src/web-components/index.ts'];
  let jsFileName = cdnUrl + manifestItems.file;
  let cssFileName = cdnUrl + manifestItems['style.css'];

  shell.exec(
    `npx plop widget-snippet --plopfile generators/index.js -- --javascriptFileName ${jsFileName} --cssFileName ${cssFileName} --version ${version}`,
  );
} catch (error) {
  console.error(`Something went wrong: ${error}`);
}
