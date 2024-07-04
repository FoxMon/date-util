export interface GenericDate<T extends Date = Date> {
  new (): T;

  new (v: Date | number | string): T;
}
