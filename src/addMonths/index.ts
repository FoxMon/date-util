import { toDate } from "../toDate";
import { constructFrom } from "../utils";

export const addMonths = <T extends Date>(
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

  const day = date.getDate();
  const end = constructFrom(v, date.getTime());

  end.setMonth(date.getMonth() + num + 1, 0);

  const daysInMonth = end.getDate();

  if (day >= daysInMonth) {
    return end;
  }

  date.setFullYear(end.getFullYear(), end.getMonth(), day);

  return date;
};
