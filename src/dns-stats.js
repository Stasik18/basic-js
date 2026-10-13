const { NotImplementedError } = require('../lib')

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
  let result = {}
  for (let i = 0; i < domains.length; i++) {
    let copyElement = domains[i].split('.').reverse()
    console.log(copyElement)
    let intervalDomen = ''
    copyElement.forEach((item) => {
      intervalDomen += `.${item}`
      if (result[intervalDomen]) {
        result[intervalDomen] += 1
      } else {
        result[intervalDomen] = 1
      }
    })
  }
  return result
}

module.exports = {
  getDNSStats,
}
