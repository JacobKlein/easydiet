import { Component } from '@angular/core';
import { EasyFileUtil } from '../../service/easy-file.util';
import { EasyAbstractFieldComponent } from './easy-abstract-field.component';

@Component({
  selector: 'easy-file-field',
  templateUrl: 'easy-file-field.component.html'
})
export class EasyFileFieldComponent extends EasyAbstractFieldComponent {

  public onUploadEvent(event: any): void {
    const files: FileList = event.target.files;
    if (files == null || files.length !== 1) {
      this.field.setValue(null);
      EasyFileUtil.clearFileEvent(event);
      return;
    }
    const file = event.target.files[0];
    this.field.setValue(file);
  }
}
