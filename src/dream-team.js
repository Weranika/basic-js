const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(arr) {
  let arr1 = [];
  let arr2 = [];
  let arr3 = [];
  if (Array.isArray(arr)) {
    return arr.filter(el => typeof el == 'string')
    .map(el => el.trim())
    .map(el => el[0])
    .map(el => el.toUpperCase())
    .sort()
    .join('');
  //   for (let i of arr) {
  //     if (typeof i == 'string') {
  //       arr1.push(i);
  //     }
  //   }
  //   for (let j of arr1) {
      
  //     arr3 = arr2.push(j[0]);
  //   }
    
  //   return arr2.sort().join('').toUpperCase();
  }
  return false;
}

module.exports = {
  createDreamTeam
};
