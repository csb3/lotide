const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected);
  }
};

//TEST CODE
assertEqual("LighthouseLabs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Cass", "Casscasscass");
assertEqual("Cass", "Cass");
assertEqual(123, 123);
assertEqual(123, 124);