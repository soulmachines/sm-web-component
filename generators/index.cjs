const componentGenerator = require('./components/index.cjs');
const appComponentGenerator = require('./appComponents/index.cjs');
const contentCardGenerator = require('./contentCards/index.cjs');
const widgetSnippetGenerator = require('./widget-snippet/index.cjs');

module.exports = (plop) => {
  plop.setGenerator('component', componentGenerator);
  plop.setGenerator('app-component', appComponentGenerator);
  plop.setGenerator('content-card', contentCardGenerator);
  plop.setGenerator('widget-snippet', widgetSnippetGenerator);
};
