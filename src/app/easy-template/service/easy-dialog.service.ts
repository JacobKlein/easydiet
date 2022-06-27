import {Injectable} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {Observable} from 'rxjs';
import {DialogData} from '../../budget/model/dialog-data';

@Injectable()
export class EasyDialogService {

  constructor(protected dialog: MatDialog) {
  }

  public confirm(message: string): Promise<boolean> {
    return new Promise<boolean>(resolve => resolve(confirm(message)));
  }

  public open(component: any, data?: DialogData): { afterClosed(): Observable<any> } {
    return this.dialog.open(component, {data: data, panelClass: 'dialog'});
  }
}
