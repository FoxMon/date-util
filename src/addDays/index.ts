import { toDate } from "../toDate";
import { constructFrom } from "../utils";

export const addDayas = <T extends Date>(
  v: T | number | string,
  num: number
): T => {
  const date = toDate(v);

  if (isNaN(num)) {
    return constructFrom(date, NaN);
  }

  if (!num) {
    return date;
  }

  date.setDate(date.getDate() + num);

  return date;
};
