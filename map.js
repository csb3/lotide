const words = ["ground", "control", "to", "major", "tom"];

const eqArrays = function(array1, array2) {
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
};

const assertArraysEqual = function(testArray1, testArray2) {
  if (eqArrays(testArray1, testArray2)) {
    console.log(`✅✅✅ Assertion Passed: ${testArray1} === ${testArray2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${testArray1} !== ${testArray2}`);
  }
};

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
assertArraysEqual(map([1,2], num => num * 2), [2, 4]);
assertArraysEqual(map(["aa", "bb"], word => word += "e"), ["aae", "bbe"]);
assertArraysEqual(map([2,4], num => num % 2 === 0), [true, true]);

module.exports = map;