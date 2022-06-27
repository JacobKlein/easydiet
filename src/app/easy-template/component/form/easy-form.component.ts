import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EasyField } from '../../model/form/easy-field';
import { EasyForm } from '../../model/form/easy-form';

@Component({
  selector: 'easy-form',
  templateUrl: 'easy-form.component.html'
})
export class EasyFormComponent {

  @Input() public form: EasyForm;
  @Output() public submit: EventEmitter<any> = new EventEmitter<any>();

  public onSubmit(event: SubmitEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.submit.emit();
  }

  public getFields(): Array<EasyField> {
    return this.form == null || this.form.getFields() == null ? [] : this.form.getFields();
  }

  public onBlur(): void {
    console.log(this.constructor.name, 'blur');
    this.form.blur.emit();
  }
}
