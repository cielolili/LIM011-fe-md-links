const path = require('path');
const route = require('../src/index.js');

describe('confirmAbsoluteRoute, debe devolver un valor booleano', () => {
  it('Debería ser una función', () => {
    expect(typeof route.confirmAbsoluteRoute).toBe('function');
  });
  it('Debería devolver true si es una ruta absoluta', () => {
    expect(route.confirmAbsoluteRoute('/')).toBe(true);
  });
  it('Debería devolver false si es una ruta relativa', () => {
    expect(route.confirmAbsoluteRoute('../')).toBe(false);
  });
});
describe('convertAbsolute, debe convertir una ruta relativa a una  absoluta', () => {
  it('Debería ser una función', () => {
    expect(typeof route.convertAbsolute).toBe('function');
  });
  it('Debería devolver una ruta absoluta', () => {
    const inputRelative = '../LIM011-fe-md-links';
    const outPutAbsolute = path.join(process.cwd());
    expect(route.convertAbsolute(inputRelative)).toEqual(route.convertAbsolute(outPutAbsolute));
  });
});
describe('file, debe devolver un valor booleano', () => {
  it('Debería ser una función', () => {
    expect(typeof route.file).toBe('function');
  });
  it('Debería devolver true si es un archivo', () => {
    expect(route.file(path.join(process.cwd(), 'src', 'index.js'))).toBe(true);
  });
  it('Debería devolver false si no es un archivo', () => {
    expect(route.file(path.join(process.cwd(), 'src'))).toBe(false);
  });
});
describe('directory, debe devolver un valor booleano', () => {
  it('Debería ser una función', () => {
    expect(typeof route.directory).toBe('function');
  });
  it('Debería devolver true si es un directorio', () => {
    expect(route.directory(path.join(process.cwd(), 'src'))).toBe(true);
  });
  it('Debería devolver false si no es un directorio', () => {
    expect(route.directory(path.join(process.cwd(), 'src', 'index.js'))).toBe(false);
  });
});
describe('md, debe devolver un valor Booleano', () => {
  it('Debería ser una función', () => {
    expect(typeof route.md).toBe('function');
  });
  it('Debería devolver true si es un archivo md', () => {
    expect(route.md(path.join(process.cwd(), 'src', 'README.md'))).toBe(true);
  });
  it('Debería devolver false si no es un archivo md', () => {
    expect(route.md(path.join(process.cwd(), 'src'))).toBe(false);
  });
});
describe('readDirectory, debe devolver un array con las rutas', () => {
  it('Debería ser una función', () => {
    expect(typeof route.readDirectory).toBe('function');
  });
  it('Debería devolver un array con los elementos que hay dentro del directorio', () => {
    const inPutDirectory = path.join(process.cwd(), 'src');
    const outPutDirectory = ['README.md', 'cli-function.js', 'cli.js', 'index.js', 'marked.js', 'mdLinks.js', 'stats.js'];
    expect(route.readDirectory(inPutDirectory)).toEqual(outPutDirectory);
  });
});
describe('readFile, debería devolver la información que hay en ese archivo', () => {
  it('Debería ser una función', () => {
    expect(typeof route.readFile).toBe('function');
  });
  it('Debería devolver lo que hay dentro', () => {
    const input = path.join(process.cwd(), 'hola', 'data.md');
    const output = '¡HOLA!\n[Holixd](https://hola.com/)';
    expect(route.readFile(input)).toEqual(output);
  });
});
describe('arrayMdDirectory, debería ser una función', () => {
  it('Debería ser una función', () => {
    expect(typeof route.arrayMdDirectory).toBe('function');
  });
  it('Debería devolver un array con rutas absolutas', () => {
    const inPutArrayMdDirectory = path.join(process.cwd(), 'src');
    const outPutArrayMdDirectory = [path.join(process.cwd(), 'src', 'README.md')];
    expect(route.arrayMdDirectory(inPutArrayMdDirectory)).toEqual(outPutArrayMdDirectory);
  });
});
describe('readFilesMd, debería ser una función', () => {
  it('Debería ser una función', () => {
    expect(typeof route.readFile).toBe('function');
  });
  it('Debería devolver un array con lo que hay dentro del archivo', () => {
    const inPutReadFiles = path.join(process.cwd(), 'hola', 'data.md');
    const outPutReadFIles = ['¡HOLA!\n[Holixd](https://hola.com/)'];
    expect(route.readFilesMd(inPutReadFiles)).toEqual(outPutReadFIles);
  });
});
describe('links, debería ser una función', () => {
  it('Debería ser una función', () => {
    expect(typeof route.links).toBe('function');
  });
  it('Debería devolver un array con objetos de tres propiedades', () => {
    const inPut = path.join(process.cwd(), 'hola');
    const ouTput = [{
      href: 'https://hola.com/',
      File:
     path.join(process.cwd(), 'hola', 'data.md'),
      text: 'Holixd',
    }];
    expect(route.links(inPut)).toEqual(ouTput);
  });
});
