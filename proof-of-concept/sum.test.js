import { test, expect } from 'vitest' ;
import { sum } from "./sum.js";

test("sum function should return the sum of two numbers", () => {
  const result = sum(5, 7);
  expect(result).toBe(12);
  return result
});