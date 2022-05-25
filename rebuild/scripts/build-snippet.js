try {
  require('dotenv').config();
  const shell = require('shelljs');
  const manifest = require('../dist/manifest.json');
  const CDN_URL = process.env.CDN_ENDPOINT;
  const { file, css } = manifest['src/web-components/index.ts'];
  let jsFileName = CDN_URL + file;
  let cssFileNames = css.map((name) => CDN_URL + name).join(',');

  shell.exec(
    `npx plop widget-snippet --plopfile generators/index.js -- --javascriptFileName ${jsFileName} --cssFileNames ${cssFileNames}`,
  );
} catch (error) {
  console.error(`Something went wrong: ${error}`);
}
