import * as uuid from 'uuid';

export class EasyStringUtil {

  public static PATTERN_EMAIL: string = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$';

  public static generateId(): string {
    return uuid.v4();
  }

  public static escapeRegExp(value: string): string {
    return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
  }

  public static toTitleCase(str: string): string {
    return str.replace(
      /\w\S*/g,
      function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
  }


  public static replace(value: string, needle: string, haystack: string): string {
    return value.replace(new RegExp(this.escapeRegExp(needle), 'g'), haystack);
  }

  public static removeSpecialCharacters(value: string): string {
    return value.replace(/\W/g, '');
  }

  public static isBlank(value: any) {
    return value == null || value === '';
  }

  public static isNotBlank(value: string): boolean {
    return !this.isBlank(value);
  }
}
