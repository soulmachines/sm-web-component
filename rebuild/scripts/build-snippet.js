try {
  require('dotenv').config();
  const shell = require('shelljs');
  const manifest = require('../dist/manifest.json');
  const isProduction = process.env.NODE_ENV === 'production';
  const CDN_URL = 'https://static.soulmachines.com/';
  const { file, css } = manifest['src/web-components/index.ts'];
  let jsFileName = file;
  let cssFileNames = css;

  if (isProduction) {
    jsFileName = CDN_URL + file;
    cssFileNames = css.map((name) => CDN_URL + name).join(',');
  }

  shell.exec(
    `npx plop widget-snippet --plopfile generators/index.js -- --javascriptFileName ${jsFileName} --cssFileNames ${cssFileNames}`,
  );
} catch (error) {
  console.error(`Something went wrong: ${error}`);
}
