import { describe, expect, it } from "vitest";
import { addMonths } from "../../src";

describe("addMonths()", () => {
  it("adds the given number of months", () => {
    const result = addMonths(new Date(2024, 1, 1), 1);

    expect(result).toEqual(new Date(2024, 2, 1));
  });

  it("cannot mutate the origin date", () => {
    const date = new Date(2024, 1, 1);

    addMonths(date, 2);

    expect(date).toEqual(new Date(2024, 1, 1));
  });
});
