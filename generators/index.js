const componentGenerator = require('./components/index.js');
const appComponentGenerator = require('./appComponents/index.js');
const contentCardGenerator = require('./contentCards/index.js');
const widgetSnippetGenerator = require('./widget-snippet/index.js');

module.exports = (plop) => {
  plop.setGenerator('component', componentGenerator);
  plop.setGenerator('app-component', appComponentGenerator);
  plop.setGenerator('content-card', contentCardGenerator);
  plop.setGenerator('widget-snippet', widgetSnippetGenerator);
};
