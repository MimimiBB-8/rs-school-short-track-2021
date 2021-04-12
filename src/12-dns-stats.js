/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const res = {};
  for (let i = 0; i < domains.length; i++) {
    const siteDomains = domains[i].split('.').reverse();
    let domainStr = '';
    for (let j = 0; j < siteDomains.length; j++) {
      domainStr += `.${siteDomains[j]}`;
      if (!res[domainStr]) {
        res[domainStr] = 1;
      } else {
        res[domainStr]++;
      }
    }
  }
  return res;
}

module.exports = getDNSStats;
