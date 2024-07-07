import { addMonths } from "../addMonths";
import { toDate } from "../toDate";
import { addDays } from "../addDays";
import { constructFrom } from "../utils";

import type { DateDuration } from "../types";

export const add = <T extends Date>(
  v: T | number | string,
  duration: DateDuration
) => {
  const {
    years = 0,
    months = 0,
    weeks = 0,
    days = 0,
    hours = 0,
    minutes = 0,
    seconds = 0,
  } = duration;
  const date = toDate(v);
  const dateWithMonths =
    months || years ? addMonths(date, months + years * 12) : date;
  const dateWithDays =
    days || weeks ? addDays(dateWithMonths, days + weeks * 7) : dateWithMonths;

  const minutesToAdd = minutes + hours * 60;
  const secondsToAdd = seconds + minutesToAdd * 60;
  const msToAdd = secondsToAdd * 1000;

  const finalDate = constructFrom(date, dateWithDays.getTime() + msToAdd);

  return finalDate;
};
