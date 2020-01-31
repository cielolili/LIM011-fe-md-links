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
describe('readDirectory, debe devolver un array con las rutas', () => {
  it('Debería ser una función', () => {
    expect(typeof route.readDirectory).toBe('function');
  });
  it('Debería devolver un array con los elementos que hay dentro del directorio', () => {
    const inPutDirectory = '/home/cielo/Documentos/Markdown-Links/LIM011-fe-md-links/src';
    const outPutDirectory = ['README.md', 'index.js'];
    expect(route.readDirectory(inPutDirectory)).toEqual(outPutDirectory);
  });
});
describe('readFile, debería devolver la información que hay en ese archivo', () => {
  it('Debería ser una función', () => {
    expect(typeof route.readFile).toBe('function');
  });
});
describe('arrayMdDirectory, debería ser una función', () => {
  it('Debería ser una función', () => {
    expect(typeof route.arrayMdDirectory).toBe('function');
  });
  it('Debería devolver un array con rutas absolutas', () => {
    const inPutArrayMdDirectory = '/home/cielo/Documentos/Markdown-Links/LIM011-fe-md-links/src';
    const outPutArrayMdDirectory = ['/home/cielo/Documentos/Markdown-Links/LIM011-fe-md-links/src/README.md'];
    expect(route.arrayMdDirectory(inPutArrayMdDirectory)).toEqual(outPutArrayMdDirectory);
  });
});
describe('readFilesMd, debería ser una función', () => {
  it('Debería ser una función', () => {
    expect(typeof route.readFile).toBe('function');
  });
  it('Debería devolver un array con lo que hay dentro del archivo', () => {
    const inPutReadFiles = '/home/cielo/Documentos/Markdown-Links/LIM011-fe-md-links/hola';
    const outPutReadFIles = ['¡HOLA!'];
    expect(route.readFilesMd(inPutReadFiles)).toEqual(outPutReadFIles);
  });
});
