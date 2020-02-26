#!/usr/bin/env node
const cli = require('../src/cli-function');

const path = process.argv[2];

const options = {
  validate: process.argv.indexOf('--validate') >= 0,
  stats: process.argv.indexOf('--stats') >= 0,
};
cli.functionCli(path, options).then((res) => console.log(res)).catch(() => console.log('ingrese una ruta valida'));
