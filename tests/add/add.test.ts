import { describe, expect, it } from "vitest";
import { add } from "../../src";

describe("add()", () => {
  it("adds the given number of date", () => {
    const result = add(new Date(2024, 8, 1, 10, 19, 50), {
      years: 2,
      months: 9,
      weeks: 1,
      days: 7,
      hours: 5,
      minutes: 9,
      seconds: 30,
    });

    expect(result).toEqual(new Date(2027, 5, 15, 15, 29, 20));
  });
});
