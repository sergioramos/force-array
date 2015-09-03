var isArray = require('is-array');

module.exports = function(v) {
  return isArray(v) ? v : (v ? [v] : []);
};