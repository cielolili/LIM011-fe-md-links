/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const marked = require('marked');
const route = require('../src/index.js');

const links = (mdFile) => {
  const renderer = new marked.Renderer();
  const array = [];
  renderer.link = (href, text, tittle) => {
    array.push({ href, text, tittle });
  };
  marked(mdFile, { renderer });
  return array;
};
console.log(links(route.readFile('/home/cielo/Documentos/Markdown-Links/LIM011-fe-md-links/src/README.md')));
/* const arrayLinks = (readFile) => {
  const array = [];
  const wardLinks = links(readFile);
  wardLinks.forEach((link) => {
    array.push(link);
  });
  return array;
};
// eslint-disable-next-line max-len
// console.log(links(route.readFile('/home/cielo/Documentos/Markdown-Links/LIM011-fe-md-links/data.md')));
*/
