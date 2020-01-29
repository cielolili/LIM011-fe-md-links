const path = require('path');
const fs = require('fs');

const confirmAbsoluteRoute = (route) => path.isAbsolute(route);
console.log(path.isAbsolute('/home/cielo/Documentos/Markdown-Links/LIM011-fe-md-links'));

const convertAbsolute = (route) => path.resolve(route);
console.log(`resolve: ${path.resolve('/foo/bar', './baz')}`);
console.log(`resolve: ${path.resolve('index.js')}`);

const file = (route) => {
  const stat = fs.statSync(route);
  // console.log(stat);
  return stat.isFile();
};
// statSync es un método de fileSystem e isFile es un método del resultado de eso.
// Si no lo voy a usar para nada más lo podría hacer en una línea.
console.log(file('/home/cielo/Documentos/Markdown-Links/LIM011-fe-md-links/README.md'));

const directory = (route) => {
  const stat = fs.statSync(route);
  return stat.isDirectory();
};
console.log(directory('/home/cielo/Documentos/Markdown-Links/LIM011-fe-md-links/'));

const md = (route) => path.extname(route) === '.md';
console.log(md('README.md'));

const route = {
  confirmAbsoluteRoute,
  convertAbsolute,
  file,
  directory,
  md,
};
module.exports = route;
