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
// function encodeLine(str) {
//   let letters = {};
//   for (let i = 0; i < str.length; i++) {
//     if (letters[str[i]]) {
//       letters[str[i]] = letters[str[i]] + 1
//     } else if (!letters[str[i]]) {
//       letters[str[i]] = 1;
//     }
//   };
//   let res = ''
//   for (let item in letters) {
//     if (letters[item] !== 1) {
//       res = res + letters[item] + item;
//     } else {
//       res = res + item;
//     }
//   }
//   return res
// }
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
char = str[i]
}
}
return result
}

module.exports = {
  encodeLine
};
