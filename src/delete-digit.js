const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let str = String(n);
  let a = 0, b = 0, c = 0;
  for (let i = 0; i < str.length; i++) {
    a = str.substring(0, i);
    b = str.substring(i + 1);
    console.log(`a = ${a} , b = ${b}`);        
    if (c < (a + b)) {
      c = a + b;
    }        
  }
  return +c;
}  

module.exports = {
  deleteDigit
};
