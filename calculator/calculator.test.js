import { test, expect } from "vitest";
import { calculate } from "./calculator";

test("Calculate Function Works", () => {
	let result;
	let operator = "&";
	switch (operator) {
		case "+":
			result = calculate("+", 9, 10);
			expect(result).toBe(19);
			return result;
		case "-":
			result = calculate("-", 4, 6);
			expect(result).toBe(-2);
			return result;
		case "*":
			result = calculate("*", -6, -8);
			expect(result).toBe(48);
			return result;
		case "/":
			result = calculate("/", 121, 11);
			expect(result).toBe(11);
			return result;
		case "sq":
			// Even if caller passes in an argument for `secondNumber`, it's effectively ignored.
			result = calculate("sq", 3, 44);
			expect(result).toBe(9);
			return result;
		default:
			throw new Error(`Unsupported operator ${operator}`);
	}
});
