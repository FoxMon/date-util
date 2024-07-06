import type { GenericDate } from "../types";

export const constructFrom = <T extends Date>(
  date: T | number | string,
  v: Date | number | string
): T => {
  if (date instanceof Date) {
    return new (date.constructor as GenericDate<T>)(v);
  }

  return new Date(v) as T;
};
