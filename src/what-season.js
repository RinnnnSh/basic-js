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
  if (typeof date === 'undefined') {
    return 'Unable to determine the time of year!';
  };
  try {
    date.toDateString()
  } catch (error) {
    throw Error('Invalid date!')
  };

  const seasons = ['winter', 'spring', 'summer', 'autumn'];
  const month = date.getMonth();
  let season;
  if (month <= 1 || month == 11) {
    season = seasons[0];
  };
  if (month > 1 && month <= 4) {
    season = seasons[1];
  };
  if (month > 4 && month <= 7) {
    season = seasons[2];
  };
  if (month > 7 && month <= 10) {
    season = seasons[3];
  };
  return season
}

module.exports = {
  getSeason
};
