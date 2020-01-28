const path = require('path');

const confirmAbsoluteRoute = (route) => path.isAbsolute(route);
console.log(path.isAbsolute('/home/cielo/Documentos/Markdown-Links/LIM011-fe-md-links'));
const route = {
  confirmAbsoluteRoute,
};
module.exports = route;
