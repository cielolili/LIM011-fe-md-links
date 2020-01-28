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
