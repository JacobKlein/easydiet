import * as moment from 'moment';

export class EasyDateUtil {

  public static LOCALE = navigator.language;
  public static FORMAT_SERVER = 'YYYY-MM-DD';
  public static FORMAT_OFX = 'YYYYMMDD000000';
  public static FORMAT_QFX = 'YYYYMMDD';

  public static init(): void {
  }

  public static now(): Date {
    return new Date();
  }

  public static getYearLabel(value: Date | string = null): string {
    const date = value == null ? new Date() : this.parseDate(value);
    return date.getFullYear().toString();
  }

  public static getMonthLabel(value: Date | string = null): string {
    if (value == null) {
      return this.getMonthLabel(new Date());
    }
    return this.parseDate(value).toLocaleString('default', {month: 'long'});
  }

  private static parseDate(value: string | Date): Date {
    return typeof value === 'string' ? new Date(value) : value;
  }


  public static convertToDate(value: any, format: string = this.getLocalFormat()): Date {
    const formatted = this.format(value, this.FORMAT_SERVER, format);
    return new Date(formatted);
  }

  public static isValid(value: any, format: string = EasyDateUtil.getLocalFormat()): boolean {
    return moment(value, format, true).isValid();
  }

  public static getLocalFormat(): string {
    return moment.localeData().longDateFormat('L');
  }

  public static format(date: string | Date, output: string, input: string = null): string {
    // console.log('format', date, output, input);
    if (date == null) {
      return null;
    }
    if (date instanceof Date) {
      return moment(date).format(output);
    } else if (this.isValid(date, input)) {
      return moment(date, input, true).format(output);
    }
    return null;
  }

  public static formatToServer(value: any): string {
    return EasyDateUtil.format(value, EasyDateUtil.FORMAT_SERVER, EasyDateUtil.getLocalFormat());
  }

  public static formatToClient(value: any): string {
    return EasyDateUtil.format(value, EasyDateUtil.getLocalFormat(), EasyDateUtil.FORMAT_SERVER);
  }

  public static getStartOfMonth(date: Date): Date {
    return new Date(date.getFullYear(), date.getMonth(), 1);
  }

  public static getEndOfMonth(date: Date): Date {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0);
  }

  public static dayDifference(a: Date, b: Date): number {
    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
    return Math.floor((utc2 - utc1) / (1000 * 60 * 60 * 24));
  }


  public static addDays(date: Date, days: number): Date {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() + days);
    return newDate;
  }

  public static compare(a: Date, b: Date): number {
    if (a.getTime() === b.getTime()) {
      return 0;
    }
    return a.getTime() - b.getTime();
  }
}
