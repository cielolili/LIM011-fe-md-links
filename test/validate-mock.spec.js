/* eslint-disable no-unused-vars */
const path = require('path');
const route = require('../src/index.js');
const fetchMock = require('../__mocks__/node-fetch');
const mdLink = require('../src/mdLinks.js');

const outPutValidate = [{
  href: 'https://es.wikipedia.org/wiki/Markdown',
  File:
    path.join(process.cwd(), 'test', 'examples', 'prueba1.md'),
  text: 'Markdown',
  status: 200,
  statusText: 'OK',
}, {
  href: 'https://nodejs.org/bye',
  File:
     path.join(process.cwd(), 'test', 'examples', 'prueba1.md'),
  text: 'Node.js',
  status: 404,
  statusText: 'Fail',

}, {
  href:
  'https://carlosazaustre.com/manejando-la-asincronia-en-javascript/',
  File:
  path.join(process.cwd(), 'test', 'examples', 'prueba1.md'),
  text: 'Asíncronía en js',
  status: 'No existe status',
  statusText: 'Fail',
}];
describe('validateLinks', () => {
  it('Debería ser una función', (done) => {
    expect(typeof route.validateLinks).toBe('function');
    done();
  });
  it('Debería devolverme un array de objetos con cinco propiedades', (done) => {
    route.validateLinks(path.join(process.cwd(), 'test', 'examples', 'prueba1.md'))
      .then((response) => {
        expect(response).toEqual(outPutValidate);
        done();
      });
  });
});
