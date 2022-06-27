import {Pipe, PipeTransform} from "@angular/core";
import {EasyErrorUtil} from "../easy-error.util";

@Pipe({name: 'easyFieldError'})
export class EasyFieldErrorPipe implements PipeTransform {
  public transform(value: any, ...args: any[]): any {
    return EasyErrorUtil.getControlError(value);
  }


}
