const String = Object.prototype.toString;

export const isDate = (value: any): value is Date =>
  String.call(value) === "[object Date]";

export const isObject = (value: any): value is Object =>
  String.call(value) === "[object Object]";
