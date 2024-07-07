import { describe, expect, it } from "vitest";
import { addDays } from "../../src";

describe("addDays()", () => {
  it("adds the given number of days", () => {
    const result = addDays(new Date(2024, 1, 1), 1);

    expect(result).toEqual(new Date(2024, 1, 2));
  });

  it("cannot mutate the origin date", () => {
    const date = new Date(2024, 1, 1);

    addDays(date, 1);

    expect(date).toEqual(new Date(2024, 1, 1));
  });
});
