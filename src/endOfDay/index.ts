import { toDate } from "../toDate";

export const endOfDay = <T extends Date>(v: T | number | string): T => {
  const date = toDate(v);

  date.setHours(23, 59, 59, 999);

  return date;
};
