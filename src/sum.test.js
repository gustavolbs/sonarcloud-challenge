const sum = require("./sum");

test("should add 1 + 2 to be equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("should add 1 + 2 not to be equal 5", () => {
  expect(sum(1, 2)).not.toBe(5);
});
