// eslint-disable-next-line no-unused-vars
const route = require('../src/index.js');

describe('absoluteRoute, debe devolver un valor booleano', () => {
  it('Debería ser una función', () => {
    expect(typeof route.absoluteRoute).toBe('function');
  });
  it('Debería devolver true si es una ruta absoluta', () => {
    const inPut = '/home/cielo/Documentos/Markdown-Links/LIM011-fe-md-links';
    const outPut = true;
    expect(route.absoluteRoute(inPut).toEqual(outPut));
  });
  it('Debería devolver false si es una ruta relativa', () => {
    const inPut = './Documentos/Markdown-Links/LIM011-fe-md-links';
    const outPut = false;
    expect(route.absoluteRoute(inPut).toEqual(outPut));
  });
});
describe('Se debe convertir a una ruta absoluta', () => {
  it('', () => {

  });
});
