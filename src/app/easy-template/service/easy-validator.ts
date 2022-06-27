import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { EasyFieldOption } from '../model/form/easy-field-option';
import { EasyDateUtil } from './easy-date.util';
import { EasyStringUtil } from './easy-string.util';

export class EasyValidator {


  static email(control: AbstractControl): ValidationErrors | null {
    if (EasyStringUtil.isBlank(control.value)) {
      return null;
    }
    const test = new RegExp(EasyStringUtil.PATTERN_EMAIL);
    return test.test(control.value) ? null : {email: true}
  }

  static date(control: AbstractControl): ValidationErrors | null {
    if (EasyStringUtil.isBlank(control.value)) {
      return null;
    }
    return !EasyDateUtil.isValid(control.value) ? {date: EasyDateUtil.getLocalFormat()} : null;
  }

  public static number(control: AbstractControl): ValidationErrors | null {
    const value = EasyValidator.getRawNumber(control.value);
    if (value == null || value === '') {
      return null;
    }
    return isNaN(value) ? {number: true} : null;
  }

  private static getRawNumber(value: any): any {
    return value;
  }

  static autoComplete(options: Array<EasyFieldOption>): ValidatorFn {
    return (c: AbstractControl): ValidationErrors | null => {
      const value = c.value;
      if (value == null || value === '') {
        return null;
      }
      const items: Array<EasyFieldOption> = options == null ? null : options.filter(f => f.value === value);
      // Success
      if (items.length == 1) {
        return null;
      }
      // Fail
      if (items.length == 0) {
        return {autoComplete: 'Please select a value'};
      } else if (items.length > 1) {
        return {autoComplete: 'Multiple items found'};
      }
      return {autoComplete: 'Aww Snap'}
    }
  }
}
