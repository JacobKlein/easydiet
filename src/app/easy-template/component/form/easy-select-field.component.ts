import { Component, Input } from '@angular/core';
import { EasyAbstractFieldComponent } from './easy-abstract-field.component';

@Component({
  selector: 'easy-select-field',
  templateUrl: 'easy-select-field.component.html'
})
export class EasySelectFieldComponent extends EasyAbstractFieldComponent {

  @Input() public multi: boolean = false;

}
