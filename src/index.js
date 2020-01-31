const path = require('path');
const fs = require('fs');

const confirmAbsoluteRoute = (route) => path.isAbsolute(route);
// console.log(path.isAbsolute('/home/cielo/Documentos/Markdown-Links/LIM011-fe-md-links'));

const convertAbsolute = (route) => path.resolve(route);
// console.log(`resolve: ${path.resolve('/foo/bar', './baz')}`);
// console.log(`resolve: ${path.resolve('index.js')}`);

const file = (route) => {
  const stat = fs.statSync(route);
  // console.log(stat);
  return stat.isFile();
};
// statSync es un método de fileSystem e isFile es un método del resultado de eso.
// Si no lo voy a usar para nada más lo podría hacer en una línea.
// console.log(file('/home/cielo/Documentos/Markdown-Links/LIM011-fe-md-links/README.md'));

const directory = (route) => {
  const stat = fs.statSync(route);
  return stat.isDirectory();
};
// console.log(directory('/home/cielo/Documentos/Markdown-Links/LIM011-fe-md-links/'));

const md = (route) => path.extname(route) === '.md';
// console.log(md('README.md'));

const readDirectory = (route) => fs.readdirSync(route); // me trae a todos
// console.log(readDirectory('/home/cielo/Documentos/Markdown-Links/LIM011-fe-md-links/src'));
const readFile = (route) => fs.readFileSync(route, 'utf8');
// console.log(readFile('/home/cielo/Documentos/Markdown-Links/LIM011-fe-md-links/data.txt'));

const arrayMdDirectory = (route) => { // solo rutas absolutas
  let newArray = [];
  if (file(route) === true && md(route) === true) {
    newArray.push(route);
  } else if (directory(route) === true) { // directory porque ese si me tira true, no un array
    const elementsDirectory = readDirectory(route);
    // console.log(elementsDirectory);
    elementsDirectory.forEach((element) => { // método para arrays
      const join = path.join(route, element); //
      newArray = newArray.concat(arrayMdDirectory(join)); //
    });
  }
  return newArray;
};
// eslint-disable-next-line max-len
// console.log(arrayMdDirectory('/home/cielo/Documentos/Markdown-Links/LIM011-fe-md-links/README.md'));
// console.log(arrayMdDirectory('/home/cielo/Documentos/Markdown-Links/LIM011-fe-md-links/src'));

const readFilesMd = (route) => {
  const array = [];
  const read = arrayMdDirectory(route);
  read.forEach((element) => {
    array.push((readFile(element)));
  });
  return array;
};
// console.log(readFilesMd('/home/cielo/Documentos/Markdown-Links/LIM011-fe-md-links/hola'));

const route = {
  confirmAbsoluteRoute,
  convertAbsolute,
  file,
  directory,
  md,
  readDirectory,
  readFile,
  arrayMdDirectory,
  readFilesMd,
};
module.exports = route;
