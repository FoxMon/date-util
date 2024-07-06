import { describe, expect, it } from "vitest";
import { constructFrom } from "../../src/utils";

describe("constructFrom()", () => {
  it("should create new Date", () => {
    const refDate = new Date("2024-01-01T12:00:00");
    const v = new Date("2024-01-02T12:00:00");

    const result = constructFrom(refDate, v);

    expect(result instanceof Date).toBe(true);
    expect(result).toEqual(v);
    expect(result.constructor).toBe(refDate.constructor);
  });
});
