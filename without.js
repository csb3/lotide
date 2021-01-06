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

const without = function(array, toRemove) {
  let removed = [].concat(array);

  for (let i = 0; i < removed.length; i++) {
    for (let j = 0; j < toRemove.length; j++) {
      if (toRemove[j] === removed[i]) {
        removed.splice(i, 1);
      }
    }
  }
  return removed;
};

without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);