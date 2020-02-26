/* eslint-disable max-len */
/* eslint-disable import/no-unresolved */
const path = require('path');
const fs = require('fs');
const marked = require('marked');
const fetch = require('node-fetch');


const confirmAbsoluteRoute = (route) => path.isAbsolute(route);
// console.log(path.isAbsolute('/home/cielo/Documentos/Markdown-Links/LIM011-fe-md-links'));

const convertAbsolute = (route) => path.resolve(route);
// console.log(`resolve: ${path.resolve('/foo/bar', './baz')}`);
// console.log(`resolve: ${path.resolve('index.js')}`);

const file = (route) => fs.statSync(route).isFile();
// statSync es un método de fileSystem e isFile es un método del resultado de eso.
// Si no lo voy a usar para nada más lo podría hacer en una línea.
// console.log(file('/home/cielo/Documentos/Markdown-Links/LIM011-fe-md-links/README.md'));

const directory = (route) => fs.statSync(route).isDirectory();
// console.log(directory('/home/cielo/Documentos/Markdown-Links/LIM011-fe-md-links/'));

const md = (route) => path.extname(route) === '.md';
// console.log(md('README.md'));

const readDirectory = (route) => fs.readdirSync(route); // me trae a todos
// console.log(readDirectory('/home/cielo/Documentos/Markdown-Links/LIM011-fe-md-links/src'));

const readFile = (route) => fs.readFileSync(route, 'utf8');
// console.log(readFile('/home/cielo/Documentos/Markdown-Links/LIM011-fe-md-links/hola/data.md'));

const arrayMdDirectory = (route) => { // solo rutas absolutas
  let newArray = [];
  if (file(route) === true && md(route) === true) {
    newArray.push(route);
  } else if (directory(route) === true) { // directory porque ese si me tira true, no un array
    const elementsDirectory = readDirectory(route);
    // console.log(elementsDirectory);
    elementsDirectory.forEach((element) => { // método para arrays
      const join = path.join(route, element); //
      newArray = newArray.concat(arrayMdDirectory(join)); // concat: para que funcione para cada ruta, para que no las altere
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
// console.log(readFilesMd('/home/cielo/Documentos/Markdown-Links/LIM011-fe-md-links/src'));
const links = (route) => {
  const renderer = new marked.Renderer();
  const array = [];
  const filesMd = arrayMdDirectory(route);
  filesMd.forEach((File) => {
    renderer.link = (href, title, text) => {
      array.push({
        href, File, text,
      });
    };
    marked(readFile(File), { renderer });
    // console.log(new marked.Renderer());
  });
  return array;
};
// console.log(links('/home/cielo/Documentos/Markdown-Links/LIM011-fe-md-links/src'));

const validateLinks = (route) => {
  const arr = [];
  const allLinks = links(route);
  allLinks.forEach((elemento) => {
    const obj = { ...elemento };
    arr.push(fetch(elemento.href)
      .then((response) => {
        if ((response.status >= 200) && (response.status <= 399)) {
          obj.status = response.status;
          obj.statusText = response.statusText;
          // console.log(elemento);
          return obj;
        }
        obj.status = response.status;
        obj.statusText = 'Fail';
        return obj;
      })
      .catch(() => {
        obj.status = 'No existe status';
        obj.statusText = 'Fail';
        return obj;
      }));
  });
  return Promise.all(arr);
};
// validateLinks('/home/cielo/Documentos/Markdown-Links/LIM011-fe-md-links/test/examples')
// .then((res) => console.log(res));

const routes = {
  confirmAbsoluteRoute,
  convertAbsolute,
  file,
  directory,
  md,
  readDirectory,
  readFile,
  arrayMdDirectory,
  readFilesMd,
  links,
  validateLinks,
};
module.exports = routes;
