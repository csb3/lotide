const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  string = string.toLowerCase();
  const results = {};
  for (const letter of string) {
    if (results[letter]) {
      results[letter]++;
    } else if (letter !== " ") {
      results[letter] = 1;
    }
  }
  return results;
};

const results1 = countLetters('lighthouse in the house');
assertEqual(results1["h"], 4);
assertEqual(results1["e"], 3);

module.exports = countLetters;