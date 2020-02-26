/* eslint-disable no-unused-vars */
const arrayProp = [{
  href: 'https://es.wikipedia.org/wiki/Markdown',
  File:
     '/home/cielo/Documentos/Markdown-Links/LIM011-fe-md-links/test/examples/prueba1.md',
  text: 'Markdown',
  status: 200,
  statusText: 'OK',
},
{
  href: 'https://nodejs.org/bye',
  File:
     '/home/cielo/Documentos/Markdown-Links/LIM011-fe-md-links/test/examples/prueba1.md',
  text: 'Node.js',
  status: 404,
  statusText: 'Fail',
},
{
  href:
     'https://carlosazaustre.com/manejando-la-asincronia-en-javascript/',
  File:
     '/home/cielo/Documentos/Markdown-Links/LIM011-fe-md-links/test/examples/prueba1.md',
  text: 'Asíncronía en js',
  status: 'No existe status',
  statusText: 'Fail',
}];
const totalObjs = (array) => array.length;
// console.log(totalObjs(arrayProp));

const filterFails = (array) => array.filter((element) => element.statusText === 'Fail').length;
// console.log(filterFails(arrayProp));

const statsUnique = (array) => new Set(array.map((link) => link.href)).size;
// console.log(statsUnique(arrayProp));

const stats = {
  totalObjs,
  filterFails,
  statsUnique,
};
module.exports = stats;
