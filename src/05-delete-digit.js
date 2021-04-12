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
function arrayMin(array) {
  return array.reduce((a, b) => Math.min(a, b));
}

function deleteDigit(n) {
  const arr = n.toString().split('');
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Number.parseInt(arr[i], 10);
  }
  const min = arrayMin(arr);
  const minIndex = arr.indexOf(min);
  arr.splice(minIndex, 1);
  return Number(arr.join(''));
}

module.exports = deleteDigit;
