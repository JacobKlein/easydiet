import { MatDialogRef } from '@angular/material/dialog';
import { EasyCommonComponent } from './easy-common.component';

export abstract class EasyDialogComponent extends EasyCommonComponent {

  public dialogRef: MatDialogRef<any>;
  public data: any;

  protected constructor() {
    super();
  }

  public onClose(response?: any): void {
    if (this.dialogRef == null) {
      this.toast('onClose: DialogRef is null');
      return;
    }
    this.dialogRef.close(response);
  }
}
