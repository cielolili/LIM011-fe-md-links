
const path = require('path');
const fs = require('fs');
const marked = require('marked');
const fetch = require('node-fetch');

const confirmAbsoluteRoute = (route) => path.isAbsolute(route);

const convertAbsolute = (route) => path.resolve(route);

const file = (route) => fs.statSync(route).isFile();

const directory = (route) => fs.statSync(route).isDirectory();

const md = (route) => path.extname(route) === '.md';

const readDirectory = (route) => fs.readdirSync(route);

const readFile = (route) => fs.readFileSync(route, 'utf8');

const arrayMdDirectory = (route) => {
  let newArray = [];
  if (file(route) === true && md(route) === true) {
    newArray.push(route);
  } else if (directory(route) === true) {
    const elementsDirectory = readDirectory(route);
    // console.log(elementsDirectory);
    elementsDirectory.forEach((element) => {
      const join = path.join(route, element);
      newArray = newArray.concat(arrayMdDirectory(join));
    });
  }
  return newArray;
};

const readFilesMd = (route) => {
  const array = [];
  const read = arrayMdDirectory(route);
  read.forEach((element) => {
    array.push((readFile(element)));
  });
  return array;
};

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
