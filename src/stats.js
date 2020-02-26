
const totalObjs = (array) => array.length;

const filterFails = (array) => array.filter((element) => element.statusText === 'Fail').length;

const statsUnique = (array) => new Set(array.map((link) => link.href)).size;

const stats = {
  totalObjs,
  filterFails,
  statsUnique,
};
module.exports = stats;
