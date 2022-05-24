try {
  const shell = require('shelljs');
  const manifest = require('../dist/manifest.json');

  const { file, css } = manifest['src/web-components/sm-widget/index.tsx'];

  shell.exec(
    `npx plop widget-snippet --plopfile generators/index.js -- --javascriptFileName ${file} --cssFileNames ${css}`,
  );
} catch (error) {
  console.error(`Something went wrong: ${error}`);
}
