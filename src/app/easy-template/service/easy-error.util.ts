import { HttpErrorResponse } from '@angular/common/http';
import { isDevMode } from '@angular/core';

export class EasyErrorUtil {

  public static ERROR_FORM_VALIDATION: string = 'Please check the form and try again';

  public static getErrorMessage(error: any): string {
    if (typeof error == 'string') {
      return error;
    }
    if (error instanceof HttpErrorResponse) {
      if (error.error != null && error.error.message != null) {
        return error.error.message;
      }
    }
    return 'Aww Snap';
  }

  static getControlError(value: any) {
    if (value == null) {
      return 'Aww Snap';
    }
    if (value.required) {
      return 'Required';
    } else if (value.date) {
      return 'Date must be in format ' + value.date;
    } else if (value.number) {
      return 'Value must be a number';
    } else if (value.autoComplete) {
      return 'Please select a value';
    } else if (value.email) {
      return 'Must be a valid email address';
    }
    if (isDevMode()) {
      return JSON.stringify(value);
    }
    return 'Aww Snap';
  }
}
