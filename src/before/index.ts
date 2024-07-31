import { toDate } from "../toDate";

export const before = <T extends Date>(
  v: T | number | string,
  target: T | number | string,
) => {
  const org = toDate(v);
  const compare = toDate(target);

  return +org < +compare;
};
