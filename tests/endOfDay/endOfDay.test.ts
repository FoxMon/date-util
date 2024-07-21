import { describe, expect, it } from "vitest";
import { endOfDay } from "../../src";

describe("endOfDay()", () => {
  it("set end of day", () => {
    const result = endOfDay(new Date(2024, 1, 1));

    expect(result).toEqual(new Date(2024, 1, 1, 23, 59, 59, 999));
  });
});
