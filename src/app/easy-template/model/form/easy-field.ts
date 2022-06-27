import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { EasyDateUtil } from '../../service/easy-date.util';
import { EasyValidator } from '../../service/easy-validator';
import { EasyFieldConfig } from './easy-field-config';
import { EasyFieldOption } from './easy-field-option';
import { EasyFieldType } from './easy-field-type';

export class EasyField {
  public config: EasyFieldConfig;
  private readonly formControl: FormControl;
  public valueChanges: Observable<any>;

  public static id(config?: EasyFieldConfig): EasyField {
    return this.createField(EasyFieldType.id, config);
  }

  public static file(config?: EasyFieldConfig): EasyField {
    return this.createField(EasyFieldType.file, config);
  }

  public static date(config?: EasyFieldConfig): EasyField {
    return this.createField(EasyFieldType.date, config);
  }

  public static text(config?: EasyFieldConfig): EasyField {
    return this.createField(EasyFieldType.text, config);
  }

  public static checkbox(config?: EasyFieldConfig): EasyField {
    return this.createField(EasyFieldType.checkbox, config);
  }

  public static decimal(config?: EasyFieldConfig): EasyField {
    return this.createField(EasyFieldType.decimal, config);
  }

  public static autoComplete(config?: EasyFieldConfig): EasyField {
    return this.createField(EasyFieldType.autoComplete, config);
  }

  public static select(config?: EasyFieldConfig): EasyField {
    return this.createField(EasyFieldType.select, config);
  }

  public static number(config?: EasyFieldConfig): EasyField {
    return this.createField(EasyFieldType.number, config);
  }

  public static email(config?: EasyFieldConfig): EasyField {
    return this.createField(EasyFieldType.email, config);
  }

  public static password(config?: EasyFieldConfig): EasyField {
    return this.createField(EasyFieldType.password, config);
  }

  public static multiSelect(config?: EasyFieldConfig) {
    return this.createField(EasyFieldType.multiSelect, config);
  }

  public static createField(type: EasyFieldType, config?: EasyFieldConfig) {
    const createConfig = config == null ? {} : config;
    createConfig.type = type;
    return new EasyField(createConfig);
  }

  // =========================================================================== //
  constructor(config: EasyFieldConfig) {
    this.config = config == null ? {} : config;
    // Special Cases
    if (this.config.type == EasyFieldType.id) {
      this.config.readOnly = true;
      this.config.label = 'id';
    }
    this.config.visible = this.defaultIfNull(this.config.visible, this.config.type != EasyFieldType.id);
    // Options
    this.config.options = this.defaultIfNull(this.config.options, []);
    const empty = this.config.options.find(o => o.value == null);
    if (this.config.type == EasyFieldType.select && empty == null) {
      const empty: EasyFieldOption = {value: null, label: null};
      this.config.options = [empty].concat(this.config.options);
    }
    // Values
    let value = this.config.value;
    switch (this.config.type) {
      case EasyFieldType.date:
        if (typeof value == 'string') {
          value = EasyDateUtil.convertToDate(value, EasyDateUtil.FORMAT_SERVER);
        }
        break;
    }

    // Init Control
    const validators: Array<any> = [];
    if (this.config.required) {
      validators.push(Validators.required);
    }
    switch (this.config.type) {
      case EasyFieldType.email:
        validators.push(EasyValidator.email);
        break;
      case EasyFieldType.date:
        validators.push(EasyValidator.date);
        break;
      case EasyFieldType.decimal:
        validators.push(EasyValidator.number);
        break;

      case EasyFieldType.autoComplete:
        validators.push(EasyValidator.autoComplete(this.config.options));
        break;
    }
    this.formControl = new FormControl(value, validators);
    this.valueChanges = this.formControl.valueChanges;
  }

  // =================================================================== //
  public isValid(): boolean {
    return this.formControl.valid;
  }

  public getValue(): any {
    const value = this.formControl.value;
    if (this.config.type == EasyFieldType.date) {
      return EasyDateUtil.formatToServer(value);
    }
    return value;
  }

  public setValue(value: any, options?: { emitEvent?: boolean }): void {
    this.formControl.setValue(value, options);
  }


  // =========================================================================== //
  public enable(): void {
    this.formControl.enable();
  }

  public disable(): void {
    this.formControl.disable();
  }

  public setEnabled(enabled: boolean) {
    if (enabled) {
      this.enable();
    } else {
      this.disable();
    }
  }

  // =========================================================================== //
  public patchValue(value: any): void {
  }

  public markAsTouched(): void {
    this.formControl.markAsTouched();
  }


  public getFormControl(): FormControl {
    return this.formControl;
  }

  // noinspection JSMethodCanBeStatic
  private defaultIfNull(value: any, defaultValue: any): any {
    return value == null ? defaultValue : value;
  }


}
