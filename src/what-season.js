const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const month = date.getMonth();
  const seasons = ['spring', 'summer', 'autumn', 'winter'];
  if (month <= 1 || month >11) {
    return seasons[3];
  } else if (month <= 2 && month < 5) {
    return seasons[0];
  } else if (month <= 5 && month < 8) {
    return seasons[1];
  } else {
    return seasons[2];
  }
}

module.exports = {
  getSeason
};
