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

const flatten = function(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let j = 0; j < array[i].length; j++) {
        newArray.push(array[i][j]);
      }
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // => [1, 2, 3, 4, 5, 6]