// Modified from https://github.com/react-boilerplate/react-boilerplate/blob/master/internals/generators/utils/componentExists.jshttps://github.com/react-boilerplate/react-boilerplate/blob/master/internals/generators/utils/componentExists.js
// Check whether the given component exist in either the components or containers directory

const fs = require('fs');
const path = require('path');

function componentExists(comp, directory) {
  const components = fs.readdirSync(path.join(__dirname, `../../src/${directory}`));
  return components.indexOf(comp) >= 0;
}

module.exports = componentExists;
