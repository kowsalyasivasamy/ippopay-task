import { minimumDifference } from "./MinimalDifference";

describe("minimumDifference", () => {
  test("[3, 9, 7, 3] should be 0", () => {
    expect(minimumDifference([3, 9, 7, 3])).toBe(2);
  });

  test("[-36, 36] should be 5", () => {
    expect(minimumDifference([-36, 36])).toBe(72);
  });

  test("[2, -1, 0, 4, -2, -9] should be 5", () => {
    expect(minimumDifference([2, -1, 0, 4, -2, -9])).toBe(0);
  });

  test("[1, 2, 3, 4, 5, 6] should be 5", () => {
    expect(minimumDifference([1, 2, 3, 4, 5, 6])).toBe(1);
  });

  test("[1, 2, 3, 4] should be 5", () => {
    expect(minimumDifference([1, 2, 3, 4])).toBe(0);
  });
});
