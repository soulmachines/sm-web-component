const componentGenerator = require('./component/index.js');
const widgetSnippetGenerator = require('./widget-snippet/index.js');

module.exports = (plop) => {
  plop.setGenerator('component', componentGenerator);
  plop.setGenerator('widget-snippet', widgetSnippetGenerator);
};
