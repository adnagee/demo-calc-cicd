// add one jest test


import { calculate } from "../../helpers";

test("adds two numbers correctly", () => {
  expect(calculate(3, "+", 5)).toBe(8);
});

test("subtracts two numbers correctly tonite", () => {
  expect(calculate(8, "-", 3)).toBe(5);
});

test("multiply two numbers correctly", () => {
  expect(calculate(8, "/", 2)).toBe(4);
});

test('returns "Error" for invalid operator', () => {
  expect(calculate(5, "*", 2)).toBe(10);
});

test('returns "Error" for invalid operands', () => {
  expect(calculate(2, "+", 2)).toBe(4);
});

