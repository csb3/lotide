const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {

  it("returns [\"Lighthouse\", \"Labs\"] from [\"Hello\", \"Lighthouse\", \"Labs\"]", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it("returns an empty array for an array with one element", () => {
    assert.deepEqual(tail([1]), []);
  });

  it("returns an empty array for []", () => {
    assert.deepEqual(tail([]), []);
  });
});