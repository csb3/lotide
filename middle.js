const middle = function(array,) {
  const midpoint = Math.ceil(array.length / 2 - 1);
  if (array.length < 3) {
    return [];
  } else if (array.length % 2 === 0) {
    return [array[midpoint], array[midpoint + 1]];
  } else {
    return [array[midpoint]];
  }
};

module.exports = middle;