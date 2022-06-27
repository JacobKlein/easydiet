import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { EasyField } from '../../model/form/easy-field';
import { EasyFieldOption } from '../../model/form/easy-field-option';
import { EasyFieldType } from '../../model/form/easy-field-type';

@Component({
  selector: 'easy-field',
  templateUrl: 'easy-field.component.html'
})
export class EasyFieldComponent {

  @HostBinding('class') public class = 'easy-field';
  @Input() public field: EasyField;
  @Input() public label: string;
  @Input() public options: Array<EasyFieldOption>;
  @Output() public blur: EventEmitter<any> = new EventEmitter<any>();

  public isTextField(): boolean {
    return [
      EasyFieldType.decimal,
      EasyFieldType.id,
      EasyFieldType.email,
      EasyFieldType.number,
      EasyFieldType.password,
      EasyFieldType.text
    ].indexOf(this.field.config.type) !== -1;
  }

  public isSelectField(): boolean {
    return [EasyFieldType.select, EasyFieldType.multiSelect].indexOf(this.field.config.type) !== -1;
  }

  public onBlur(): void {
    this.blur.emit();
  }
}
