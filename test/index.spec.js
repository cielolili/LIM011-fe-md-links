// eslint-disable-next-line no-unused-vars
const route = require('../src/index.js');

describe('confirmAbsoluteRoute, debe devolver un valor booleano', () => {
  it('Debería ser una función', () => {
    expect(typeof route.confirmAbsoluteRoute).toBe('function');
  });
  it('Debería devolver true si es una ruta absoluta', () => {
    expect(route.confirmAbsoluteRoute('/home/cielo/Documentos/Markdown-Links/LIM011-fe-md-links')).toBe(true);
  });
  it('Debería devolver false si es una ruta relativa', () => {
    expect(route.confirmAbsoluteRoute('./Documentos/Markdown-Links/LIM011-fe-md-links')).toBe(false);
  });
});
describe('convertAbsolute, debe convertir una ruta relativa a una  absoluta', () => {
  it('Debería ser una función', () => {
    expect(typeof route.convertAbsolute).toBe('function');
  });
  it('Debería devolver una ruta absoluta', () => {
    const inputRelative = '../LIM011-fe-md-links';
    const outPutAbsolute = '/home/cielo/Documentos/Markdown-Links/LIM011-fe-md-links';
    expect(route.convertAbsolute(inputRelative)).toEqual(route.convertAbsolute(outPutAbsolute));
  });
});
describe('file, debe devolver un valor booleano', () => {
  it('Debería ser una función', () => {
    expect(typeof route.file).toBe('function');
  });
  it('Debería devolver true si es un archivo', () => {
    expect(route.file('/home/cielo/Documentos/Markdown-Links/LIM011-fe-md-links/README.md')).toBe(true);
  });
  it('Debería devolver false si no es un archivo', () => {
    expect(route.file('/home/cielo/Documentos/Markdown-Links/LIM011-fe-md-links/')).toBe(false);
  });
});
describe('directory, debe devolver un valor booleano', () => {
  it('Debería ser una función', () => {
    expect(typeof route.directory).toBe('function');
  });
  it('Debería devolver true si es un directorio', () => {
    expect(route.directory('/home/cielo/Documentos/Markdown-Links/LIM011-fe-md-links/')).toBe(true);
  });
  it('Debería devolver false si no es un directorio', () => {
    expect(route.directory('/home/cielo/Documentos/Markdown-Links/LIM011-fe-md-links/README.md')).toBe(false);
  });
});
describe('md, debe devolver un valor Booleano', () => {
  it('Debería ser una función', () => {
    expect(typeof route.md).toBe('function');
  });
  it('Debería devolver true si es un archivo md', () => {
    expect(route.md('README.md')).toBe(true);
  });
  it('Debería devolver false si no es un archivo md', () => {
    expect(route.md('README.js')).toBe(false);
  });
});
