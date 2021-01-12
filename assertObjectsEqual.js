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

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (const key in object1) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      } else if (object1[key] !== object2[key]) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

assertObjectsEqual({a: 2, b: 4}, {a: 3, b: 4}); // false
assertObjectsEqual({a: 3, b:[4, 6]}, {b: [4, 6], a: 3}); // true
assertObjectsEqual({a: 5, d: 7}, {c: 4, a: 5}); // false
assertObjectsEqual({a: 5}, {a: 5, b: 7}); //false
assertObjectsEqual({a: 3, b:[4, 6]}, {b: [4, 7], a: 3}); // false

module.exports = assertObjectsEqual;