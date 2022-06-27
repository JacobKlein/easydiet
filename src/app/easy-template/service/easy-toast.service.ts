import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EasyErrorUtil } from './easy-error.util';

@Injectable()
export class EasyToastService {

  constructor(protected snack: MatSnackBar) {
  }

  public error(error: any): void {
    console.error(error);
    this.snack.open(EasyErrorUtil.getErrorMessage(error), null, {duration: 3000});
  }

  public toast(msg: any): void {
    this.snack.open(msg, null, {duration: 3000});
  }
}
