const isAString = require("./index");

it("Should return true if input is a string", () => {
	const result = isAString("I'm a string");

	expect(result).toBe(true);
});

it("Should return false if input is a number", () => {
	const result = isAString(45);

	expect(result).toBe(false);
});

it("Should return false if input is an object", () => {
	const result = isAString({ name: "Abel" });

	expect(result).toBe(false);
});

it("Should return false if input is an array", () => {
	const result = isAString([1, 2, 3]);

	expect(result).toBe(false);
});

it("Should return false if input is undefined", () => {
	const result = isAString(undefined);
	const anotherResult = isAString();

	expect(result).toBe(false);
	expect(anotherResult).toBe(false);
});

it("Should return false if input is null", () => {
	const result = isAString(null);

	expect(result).toBe(false);
});

it("Should return false if input is a symbol", () => {
	try {
		const result = isAString(Symbol("lol"));

		expect(result).toBe(false);
	} catch (err) {
		expect(err.name).toMatch("ReferenceError");
	}
});

it("Should return false if input is a boolean", () => {
	const result = isAString(false);
	const anotherResult = isAString(true);

	expect(result).toBe(false);
	expect(anotherResult).toBe(false);
});
