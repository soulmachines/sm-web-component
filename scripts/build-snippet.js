try {
  require('dotenv').config();
  const shell = require('shelljs');
  const manifest = require('../dist/manifest.json');
  const cdnUrl = process.env.CDN_ENDPOINT || '';
  const version = process.env.VERSION || 'unknown';
  const { file, css } = manifest['src/web-components/index.ts'];
  let jsFileName = cdnUrl + file;
  let cssFileNames = css.map((name) => cdnUrl + name).join(',');

  shell.exec(
    `npx plop widget-snippet --plopfile generators/index.js -- --javascriptFileName ${jsFileName} --cssFileNames ${cssFileNames} --version ${version}`,
  );
} catch (error) {
  console.error(`Something went wrong: ${error}`);
}
