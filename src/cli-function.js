
const mdlink = require('../src/mdLinks.js');
const stat = require('../src/stats.js');

const functionCli = (path, options) => {
  if (options.validate && options.stats) {
    return mdlink.mdLinks(path, { validate: true }).then((data) => {
      let stats = '';
      stats += `Total: ${stat.totalObjs(data)}\n Uniques: ${stat.statsUnique(data)}\n Broken: ${stat.filterFails(data)}`;
      return stats;
    });
  }
  if (options.validate) {
    return mdlink.mdLinks(path, { validate: true }).then((data) => {
      let validate = '';
      data.forEach((element) => {
        validate += `${element.href} ${element.File}  ${element.status}${element.statusText} ${element.text} \n`;
      });
      return validate;
    });
  }
  if (options.stats) {
    return mdlink.mdLinks(path, { validate: false }).then((data) => {
      let stats = '';
      stats += ` Total: ${stat.totalObjs(data)}\n Uniques: ${stat.statsUnique(data)}`;
      return stats;
    });
  } return mdlink.mdLinks(path, { validate: false }).then((data) => {
    let links = '';
    data.forEach((element) => {
      links += `${element.href} ${element.File} ${element.text}\n`;
    });
    return links;
  });
};
// eslint-disable-next-line max-len
// functionCli('/home/cielo/Documentos/Markdown-Links/LIM011-fe-md-links/test/examples', { stats: '--stats' })
// .then((res) => console.log(res));
const functCli = {
  functionCli,
};
module.exports = functCli;
