const _ = require('lodash');

const preparePairs = (data, number = 6) => {
  if (!data || data.length < number) {
    return [];
  }

  const extractedCards = data.slice(0, number);

  return _.shuffle(extractedCards.concat(extractedCards));
}

module.exports = {
  preparePairs
}