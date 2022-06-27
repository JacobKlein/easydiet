import { Component } from '@angular/core';
import { EasyFieldType } from '../../model/form/easy-field-type';
import { EasyAbstractFieldComponent } from './easy-abstract-field.component';

@Component({
  selector: 'easy-text-field',
  templateUrl: 'easy-text-field.component.html'
})
export class EasyTextFieldComponent extends EasyAbstractFieldComponent {

  public getType(): string {
    if (this.field.config.type == EasyFieldType.password) {
      return 'password';
    }
    return 'text';
  }
}
