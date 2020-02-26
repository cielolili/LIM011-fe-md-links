const path = require('path');
const routes = require('../src/index.js');

const mdLinks = (patha, options) => {
  const convertRelativePath = path.resolve(patha);
  const isAbsolutePath = path.isAbsolute(patha) ? patha : convertRelativePath;
  // console.log(isAbsolutePath);
  if (options.validate === true) {
    return routes.validateLinks(isAbsolutePath);
  } return Promise.resolve(routes.links(isAbsolutePath));
};

// eslint-disable-next-line max-len
// mdLinks('/home/cielo/Documentos/Markdown-Links/LIM011-fe-md-links/test/examples/prueba1.md', { validate: false })
// .then((res) => console.log(res));

const mdLink = {
  mdLinks,
};
module.exports = mdLink;
