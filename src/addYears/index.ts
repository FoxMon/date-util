import { addMonths } from "../addMonths";

export const addYears = <T extends Date>(
  v: T | number | string,
  num: number,
): T => {
  const MONTHS: number = 12;

  return addMonths(v, num * MONTHS);
};
