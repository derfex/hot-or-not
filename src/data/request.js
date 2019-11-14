import candidates from '@/data/candidates';

const randomInt = function getRandomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const requestData = function requestData(source, count) {
  const max = source.length - 1;
  const data = [];
  let i = count;
  // eslint-disable-next-line no-plusplus
  while (i--) {
    const item = source[randomInt(0, max)];
    data.push(item);
  }

  return data;
};


/**
 * Request array of candidates.
 * @param count — records quantity.
 * @returns {[]}
 */
const loadCandidates = function loadCandidates(count) {
  return requestData(candidates, count);
};

export default {
  loadCandidates,
};
