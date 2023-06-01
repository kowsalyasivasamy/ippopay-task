import { getMinimalStepCount } from "./service";

describe("getMinimalStepCount", () => {
  test("Test123 should be 0", () => {
    expect(getMinimalStepCount("Test123")).toBe(0);
  });

  test("`` should be 5", () => {
    expect(getMinimalStepCount("")).toBe(6);
  });

  test("a should be 5", () => {
    expect(getMinimalStepCount("a")).toBe(5);
  });

  test("aA1 should be 3", () => {
    expect(getMinimalStepCount("aA1")).toBe(3);
  });

  test("1337C0d3 should be 0", () => {
    expect(getMinimalStepCount("1337C0d3")).toBe(0);
  });

  test("ffffffffffffffffffffffffffffff should be 16", () => {
    expect(getMinimalStepCount("ffffffffffffffffffffffffffffff")).toBe(16);
  });

  test("abcdefghijklmnopqrstuvwxyz should be 6", () => {
    expect(getMinimalStepCount("abcdefghijklmnopqrstuvwxyz")).toBe(6);
  });

  test("abcdefghijklmnopqr should be 2", () => {
    expect(getMinimalStepCount("abcdefghijklmnopqr")).toBe(2);
  });
});
