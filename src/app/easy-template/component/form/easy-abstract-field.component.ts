import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { EasyField } from '../../model/form/easy-field';
import { EasyFieldOption } from '../../model/form/easy-field-option';

@Component({template: ''})
export abstract class EasyAbstractFieldComponent {

  @HostBinding('class') public class = 'easy-field';

  // Controls
  @Input() public field: EasyField;
  @Input() public fieldFormControl: AbstractControl;
  // Override
  @Input() public label: string;
  @Input() public options: Array<EasyFieldOption>;
  @Output() public blur: EventEmitter<any> = new EventEmitter<any>();

  public getLabel(): string {
    if (this.label != null) {
      return this.label;
    }
    return this.field != null && this.field.config != null && this.field.config.label != null ?
      this.field.config.label : '';
  }

  public hasLabel(): boolean {
    if (this.label != null) {
      return true;
    }
    return this.field != null && this.field.config != null && this.field.config.label != null;
  }

  public getReadyOnly(): boolean {
    return this.field != null && this.field.config != null && this.field.config.readOnly;
  }

  public onBlur(): void {
    this.blur.emit();
  }

  public getFormControl(): FormControl {
    if (this.fieldFormControl != null) {
      return this.fieldFormControl as FormControl;
    }
    return this.field == null || this.field.getFormControl() == null ? null : this.field.getFormControl();
  }

  public getFieldOptions(): Array<EasyFieldOption> {
    if (this.options != null) {
      return this.options;
    }
    return this.field != null && this.field.config != null ? this.field.config.options : [];
  }

  public getControlErrors(): any {
    if (this.fieldFormControl != null) {
      return this.fieldFormControl.errors;
    }
    return this.field != null && this.field.getFormControl() != null ? this.field.getFormControl().errors : null;
  }
}
