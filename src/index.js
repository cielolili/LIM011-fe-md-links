const path = require('path');

const confirmAbsoluteRoute = (route) => path.isAbsolute(route);
console.log(path.isAbsolute('/home/cielo/Documentos/Markdown-Links/LIM011-fe-md-links'));

const convertAbsolute = (route) => path.resolve(route);
console.log(`resolve: ${path.resolve('/foo/bar', './baz')}`);
console.log(`resolve: ${path.resolve('index.js')}`);


const route = {
  confirmAbsoluteRoute,
  convertAbsolute,
};
module.exports = route;
