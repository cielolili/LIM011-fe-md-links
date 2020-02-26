const nodeFetch = jest.requireActual('node-fetch');
const fetchMock = require('fetch-mock').sandbox();

Object.assign(fetchMock.config, {
  fetch: nodeFetch,
});
fetchMock
  .mock('https://es.wikipedia.org/wiki/Markdown', 200)
  .mock('https://nodejs.org/bye', 404)
  .mock('https://carlosazaustre.com/manejando-la-asincronia-en-javascript/', { throws: new TypeError('Failed to fetch') });
module.exports = fetchMock;
