export class EasyNumberUtil {

  public static add(first: number, second: number): number {
    return +(+first + +second).toFixed(10);
  }

  public static subtract(first: number, second: number): number {
    return +(first - second).toFixed(10);
  }

  public static isNumber(value: any): boolean {
    return !isNaN(value);
  }

  public static getNumberValue(value: any): number {
    return +value;
  }

  public static toCurrency(value: any): string {
    return this.toDecimal(value).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  public static toDecimal(value: any, decimalPlaces: number = 2): string {
    if (value == null || value === '') {
      return '0.00';
    }
    return (Math.round(+value * 100) / 100).toFixed(decimalPlaces);
  }

  static isEqual(existing: any, fieldValue: any) {
    return +existing == +fieldValue;
  }

  static toInteger(number: number) {
    return this.toDecimal(number, 0);
  }
}
