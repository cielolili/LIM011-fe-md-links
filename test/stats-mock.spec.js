/* eslint-disable no-unused-vars */
const stats = require('../src/stats.js');

const inputPrueba = [{
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
describe('totalObjs', () => {
  it('Debería ser una función', () => {
    expect(typeof stats.totalObjs).toBe('function');
  });
  it('Debería retornar el total de objetos que hay en el array', () => {
    const total = 3;
    expect(stats.totalObjs(inputPrueba)).toEqual(total);
  });
});
describe('filterFails', () => {
  it('Debería ser una función', () => {
    expect(typeof stats.filterFails).toBe('function');
  });
  it('Debería retornar la cantidad de links rotos', () => {
    const broken = 2;
    expect(stats.filterFails(inputPrueba)).toEqual(broken);
  });
});
describe('statsUnique', () => {
  it('Debería ser una función', () => {
    expect(typeof stats.statsUnique).toBe('function');
  });
  it('Debería retornar la cantidad de links únicos', () => {
    const uniques = 3;
    expect(stats.statsUnique(inputPrueba)).toEqual(uniques);
  });
});
