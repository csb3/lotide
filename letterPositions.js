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

const letterPositions = function(sentence) {
  const results = {};
  const string = sentence.toLowerCase();
  for (let i = 0; i < string.length; i++) {
    if (results[string[i]]) {
      results[string[i]].push(i);
    } else if (string[i] !== " ") {
      results[string[i]] = [i];
    }
  }
  return results;
};

const results1 = letterPositions("lighthouse in the house");
assertArraysEqual(results1["l"], [0]);
assertArraysEqual(results1["e"], [9, 16, 22]);