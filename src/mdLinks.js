const path = require('path');
const routes = require('../src/index.js');

const mdLinks = (patha, options) => {
  const convertRelativePath = path.resolve(patha);
  const isAbsolutePath = path.isAbsolute(patha) ? patha : convertRelativePath;
  if (options.validate === true) {
    return routes.validateLinks(isAbsolutePath);
  } return Promise.resolve(routes.links(isAbsolutePath));
};

const mdLink = {
  mdLinks,
};
module.exports = mdLink;
