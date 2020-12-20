"use strict";

const assert = require("assert");
const { it } = require("../lib/it");

const doesItSumTo2020 = (x, y) => {
  return x + y === 2020;
};

const getProduct = (expenseReport) => {
    for (let i = 0; i < expenseReport.length; i++) {
        for (let j = 0; j < expenseReport.length; j++) {
            if (doesItSumTo2020(expenseReport[i], expenseReport[j])) {
                return expenseReport[i] * expenseReport[j];
            }
        }
    }
};

// it("should pass", () => {
//   assert.strictEqual(true, false);
// });

it("return true when two numbers that sum to 2020", () => {
  // Setup
  // Assert

  assert.strictEqual(doesItSumTo2020(2000, 20), true);
});

it("return false when two numbers that not sum to 2020", () => {
  // Setup
  // Assert

  assert.strictEqual(doesItSumTo2020(666, 999), false);
});

it("returns the correct product for the numbers that sum up to 2020", () => {
  // Setup
  // Assert
  const actual = getProduct([2000, 20]);
  const expected = 40000;
  assert.strictEqual(actual, expected);
});

it("returns the correct product for the numbers that sum up to 2020", () => {
  // Setup
  // Assert
  const actual = getProduct([1980, 40]);
  const expected = 79200;
  assert.strictEqual(actual, expected);
});

it("returns the correct product for the numbers that sum up to 2020", () => {
  // Setup
  // Assert
  const actual = getProduct([2000, 1, 20]);
  const expected = 40000;
  assert.strictEqual(actual, expected);
});
// it("finds numbers that sum to 2020", () => {
//     // Setup
//   const expenseReport = [1721, 979, 366, 299, 675, 1456];
//   // Assert
// });
