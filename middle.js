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

const isEven = function(number) {
  return number % 2 === 0;
};

const middle = function(array,) {
  const midpoint = Math.ceil(array.length / 2 - 1);
  if (array.length < 3) {
    return [];
  } else if (isEven(array.length)) {
    return [array[midpoint], array[midpoint + 1]];
  } else {
    return [array[midpoint]];
  }
};

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3]), [2]);
