"use strict";

const assert = require("assert");
const { it } = require("../lib/it");

const checkLowerBound = ({ lowerBound, password, letter }) => {
  if (password.length < lowerBound) {
    return false;
  }
  return true;
}

const countOccurences = ({ password, letter }) => {
 return (new RegExp(letter + '+', 'g').exec(password) || []).length;
}

const validatePassword = ({ lowerBound, upperBound, letter, password }) => {
  const count = countOccurences({ password, letter });

  return count >= lowerBound && count <= upperBound;

  // return checkLowerBound({lowerBound, password, letter});
};

it("passes if lower bound is 0", () => {
  const actual = validatePassword({ lowerBound: 0, upperBound: 1, letter: "a", password: "" });
  const expected = true;
  assert.strictEqual(actual, expected);
});

it("fails if password does not satisfy lowerbound", () => {
  const actual = validatePassword({ lowerBound: 1, upperBound: 1, letter: "a", password: "" });
  const expected = false;
  assert.strictEqual(actual, expected);
});

it("passes when satisfies both constraints", () => {
  const actual = validatePassword({ lowerBound: 1, upperBound: 3, letter: "a", password: "abcde" });
  const expected = true;
  assert.strictEqual(actual, expected);
});

it("fails when it doesnt satisfy both constraints", () => {
  const actual = validatePassword({ lowerBound: 1, upperBound: 3, letter: "b", password: "cdefg" });
  const expected = false;
  assert.strictEqual(actual, expected);
});

it("fails when it doesnt satisfy both constraints", () => {
  const actual = validatePassword({ lowerBound: 3, upperBound: 5, letter: "b", password: "this-is-a-b-test-b-w" });
  const expected = false;
  assert.strictEqual(actual, expected);
});
