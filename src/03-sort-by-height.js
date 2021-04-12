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

function sortfunction(a, b) {
  return (a - b);
}

function sortByHeight(arr) {
  const array = [];
  const val = -1;
  let i = -1;
  i = arr.indexOf(val, i + 1);
  while (i !== -1) {
    array.push(i);
    i = arr.indexOf(val, i + 1);
  }
  let result = arr.sort(sortfunction);
  result = result.splice(array.length);
  for (let j = 0; j < array.length; j++) {
    result.splice(array[j], 0, -1);
  }
  return result;
}

module.exports = sortByHeight;
