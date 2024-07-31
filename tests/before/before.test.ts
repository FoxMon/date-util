import { describe, expect, it } from "vitest";
import { before } from "../../src";

describe("before()", () => {
  it("returns true if the first date is before the given second one", () => {
    const result = before(new Date(2023, 1, 1), new Date(2024, 1, 1));

    expect(result).toBe(true);
  });

  it("returns false if the first date after the given second one", () => {
    const result = before(new Date(2024, 1, 1), new Date(2023, 1, 1));

    expect(result).toBe(false);
  });
});
