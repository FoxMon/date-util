import { describe, expect, it } from "vitest";
import { toDate } from "../../src";

describe("toDate()", () => {
  describe("arguments", () => {
    it("can clone given a date", () => {
      const date = new Date(2024, 0, 1);
      const cloned = toDate(date);

      cloned.setFullYear(2025);

      expect(date).toEqual(new Date(2024, 0, 1));
    });
  });

  describe("timestamp", () => {
    it("can create timestamp", () => {
      const timestamp = new Date(2024, 0, 1, 23, 59, 59, 123).getTime();
      const cloned = toDate(timestamp);

      expect(cloned).toEqual(new Date(2024, 0, 1, 23, 59, 59, 123));
    });
  });
});
