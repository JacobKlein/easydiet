import { EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppInjector } from '../../service/easy-app-initializer.service';
import { EasyField } from './easy-field';

export class EasyForm {

  public valueChanges: EventEmitter<any> = new EventEmitter<any>();
  public blur: EventEmitter<any> = new EventEmitter<any>();
  public formGroup: FormGroup;

  private readonly fields: Array<EasyField>;
  private readonly fieldsByName: { [fieldName: string]: EasyField };

  constructor(controls?: { [key: string]: EasyField }) {
    this.fields = [];
    this.fieldsByName = {};
    this.formGroup = AppInjector.get(FormBuilder).group({});
    if (controls == null) {
      return;
    }
    Object.keys(controls).forEach(key => {
      this.addField(key, controls[key]);
    });
    this.formGroup.valueChanges.subscribe(() => {
      this.valueChanges.emit();
    })
  }

  // ============================================================================== //
  public enable(): void {
    this.formGroup.enable();
  }

  public disable(): void {
    this.formGroup.disable();
  }

  public setEnabled(enabled: boolean) {
    if (enabled) {
      this.enable();
    } else {
      this.disable();
    }
  }

  // ============================================================================== //
  public patchValue(data: any, options?: { emitEvent?: boolean }): void {
    this.formGroup.patchValue(data, options);
  }

  public getValue(): any {
    const value: any = {};
    Object.keys(this.fieldsByName).forEach(fieldName => {
      const field: EasyField = this.fieldsByName[fieldName];
      value[fieldName] = field.getValue();
    });
    return value;
  }

  public getFieldValue(fieldName: string): any {
    const field = this.fieldsByName[fieldName];
    if (field == null) {
      throw new Error('Could not find field ' + fieldName);
    }
    return field.getValue();
  }

  public setFieldValue(fieldName: string, value: any, options?: { emitEvent?: boolean }) {
    const field = this.getField(fieldName);
    if (field == null) {
      console.error('Could not find field', fieldName);
      return;
    }
    field.setValue(value, options);
  }

  // ============================================================================== //

  public logErrors(): void {
    if (this.formGroup.errors != null) {
      console.error('FORM', this.formGroup.errors);
    }
    Object.keys(this.formGroup.controls).forEach(key => {
      const control = this.formGroup.get(key);
      if (control != null && !control.valid) {
        console.error(key, this.formGroup.get(key)?.errors);
      }
    });
  }

  public isValid(): boolean {
    return this.formGroup.valid;
  }

  public addField(fieldName: string, field: EasyField): void {
    this.fields.push(field);
    this.fieldsByName[fieldName] = field;
    this.formGroup.addControl(fieldName, field.getFormControl());
  }


  public getFields(): Array<EasyField> {
    return this.fields == null ? [] : this.fields;
  }

  public getField(fieldName: string): EasyField {
    return this.fieldsByName[fieldName];
  }


  public markAsTouched(): void {
    this.formGroup.markAllAsTouched();
  }


}
