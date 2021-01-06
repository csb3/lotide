const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  string = string.toLowerCase();
  let results = {};
  for (const letter of string) {
    if (results[letter]) {
      results[letter]++;
    } else if (letter !== " ") {
      results[letter] = 1;
    }
  }
  return results;
};
