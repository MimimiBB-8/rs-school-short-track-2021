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
  let current = '';
  let count = 0;
  const res = [];
  const strArr = [...str];
  strArr.push('');
  for (let i = 0; i < strArr.length; i++) {
    if (current !== str[i]) {
      res.push((count ? ++count : '') + current);
      current = str[i];
      count = 0;
    } else {
      count++;
    }
  }
  return res.join('');
}

module.exports = encodeLine;
