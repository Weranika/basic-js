const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(arr) {
  let arr1 = arr.flat(Infinity);
  let catArr = [];
  for (let i of arr1) {
    if (i == '^^') {
      catArr.push(i);      
    }    
  }  
  return catArr.length;  
}

module.exports = {
  countCats
};
