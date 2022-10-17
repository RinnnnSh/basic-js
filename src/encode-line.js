const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  let result = '';
  let char = str[0];
  let count = 1;
  for (let i = 1; i <= str.length; i++) {
    if (str[i] == char) {
      count++;
    } else {
      result += count > 1? count + char : char;
      count = 1;
      char = str[i];
    }
  }
  return result;
}

module.exports = {
  encodeLine
};
