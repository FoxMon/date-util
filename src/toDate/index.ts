import type { GenericDate } from "../types";

export const toDate = <T extends Date>(args: T | string | number): T => {
  const argStr = Object.prototype.toString.call(args);

  if (
    args instanceof Date ||
    (typeof args === "object" && argStr === "[object Date]")
  ) {
    return new (args.constructor as GenericDate<T>)(+args);
  } else if (
    typeof args === "number" ||
    argStr === "[object Number]" ||
    typeof args === "string" ||
    argStr === "[object String]"
  ) {
    return new Date(args) as T;
  } else {
    return new Date(NaN) as T;
  }
};
