const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let arr1 = [];
  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == '--double-next') {
        arr1.push(arr[i + 1]);
      } else if (arr[i] == '--discard-prev') {
        arr1.pop();
      } else if (arr[i] == '--discard-next') {
        i = i + 2;
      } else if (arr[i] == '--double-prev') {
        arr1.push(arr[i - 1]);
      } else {
        arr1.push(arr[i]);
      }
    }
    const filtered = arr1.filter(function (el) {
      return el != null;
    });
    return filtered;
  } else {
    throw new Error ("\'arr\' parameter must be an instance of the Array!");
  }
}

module.exports = {
  transform
};
