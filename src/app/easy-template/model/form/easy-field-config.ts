import { EasyFieldOption } from './easy-field-option';
import { EasyFieldType } from './easy-field-type';

export interface EasyFieldConfig {

  type?: EasyFieldType;
  required?: boolean;
  visible?: boolean;
  readOnly?: boolean;
  label?: string;
  value?: any;
  maxLength?: number;
  options?: Array<EasyFieldOption>;
}
