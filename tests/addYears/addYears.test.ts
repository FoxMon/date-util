import { describe, expect, it } from "vitest";
import { addYears } from "../../src";

describe("addYears()", () => {
  it("add the given number of years", () => {
    const result = addYears(new Date(2024, 1, 1), 1);

    expect(result).toEqual(new Date(2025, 1, 1));
  });
});
