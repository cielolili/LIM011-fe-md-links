#!/usr/bin/env node
// const functCli = require('../src/cli-function.js');
const cli = require('../src/cli-function');
// const functionCLi = require('../src/mdLinks.js');

// const [,, ...opcion] = process.argv;

// console.log(process.argv);
// console.log(process.argv[1]);
// console.log([,, ...opcion]);
// console.log(process.argv);
// console.log('hola');


// const elements = ['--validate --stats'];
// console.log(elements.join(''));
// console.log(process.argv);

const path = process.argv[2];

const options = {
  validate: process.argv.indexOf('--validate') >= 0,
  stats: process.argv.indexOf('--stats') >= 0,
};
cli.functionCli(path, options)
  .then((res) => {
    console.log(res);
  });
