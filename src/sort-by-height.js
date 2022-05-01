const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let arr1 = [...arr];
  let arrSort =  arr1.sort((a,b) => a - b).filter(el => el != -1);
  return arr.map(function(el) {    
      if (el !== -1) {
        let first = arrSort.shift()
        console.log(`change ${el} to ${first}`)
        return first;
      }
      return el;
  })
}

module.exports = {
  sortByHeight
};
