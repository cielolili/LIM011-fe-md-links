/* eslint-disable no-unused-vars */
const path = require('path');

// const fetchMock = require('../__mocks__/node-fetch');
const mdLink = require('../src/mdLinks.js');

const outPutFive = [{
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
const outPutThree = [{
  href: 'https://es.wikipedia.org/wiki/Markdown',
  File:
  path.join(process.cwd(), 'test', 'examples', 'prueba1.md'),
  text: 'Markdown',
},
{
  href: 'https://nodejs.org/bye',
  File:
  path.join(process.cwd(), 'test', 'examples', 'prueba1.md'),
  text: 'Node.js',
}, {
  href:
    'https://carlosazaustre.com/manejando-la-asincronia-en-javascript/',
  File:
    path.join(process.cwd(), 'test', 'examples', 'prueba1.md'),
  text: 'Asíncronía en js',
}];
describe('mdLinks', () => {
  it('Debería ser una función', () => {
    expect(typeof mdLink.mdLinks).toBe('function');
  });
  it('Debería devolver un array con 5 propiedades', (done) => {
    mdLink.mdLinks(path.join(process.cwd(), 'test', 'examples', 'prueba1.md'), { validate: true })
      .then((response) => {
        expect(response).toEqual(outPutFive);
        done();
      });
  });
  it('Debería devolver un array con 3 propiedades', (done) => {
    mdLink.mdLinks(path.join(process.cwd(), 'test', 'examples', 'prueba1.md'), { validate: false })
      .then((response) => {
        expect(response).toEqual(outPutThree);
        done();
      });
  });
  it('Debería devolver un array con 3 propiedades', (done) => {
    mdLink.mdLinks(('../LIM011-fe-md-links/test/examples/prueba1.md'), { validate: false })
      .then((response) => {
        expect(response).toEqual(outPutThree);
        done();
      });
  });
});
