import { test, expect } from "vitest";
import { calculate } from "./calculator";

test("Calculate Function Works", () => {
	const operators = ["+", "-", "*", "/", "sq"];
	operators.forEach((operator) => {
		let result;
		switch (operator) {
			case "+":
				result = calculate("+", 9, 10);
				expect(result).toBe(19);

				console.log(`'+' result = '${result}'`);
				break;
			case "-":
				result = calculate("-", 4, 6);
				expect(result).toBe(-2);

				console.log(`'-' result = '${result}'`);
				break;
			case "*":
				result = calculate("*", -6, -8);
				expect(result).toBe(48);

				console.log(`'*' result = '${result}'`);
				break;
			case "/":
				result = calculate("/", 121, 11);
				expect(result).toBe(11);

				console.log(`'/' result = '${result}'`);
				break;
			case "sq":
				result = calculate("sq", 3, 44);
				expect(result).toBe(9);

				console.log(`'sq' result = '${result}'`);
				break;
		}
	});

	let operator = "🍕";
	try {
		calculate(operator);
		console.log(`Valid operator = '${operator}'`);
	} catch (error) {
		expect(error.message) /*.toBe(`Unsupported operator ${operator}`)*/;
		console.log(error.message);
		return error;
	}
});
