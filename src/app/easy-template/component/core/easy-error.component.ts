import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { EasyErrorUtil } from '../../service/easy-error.util';

@Component({
  selector: 'easy-error',
  templateUrl: 'easy-error.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EasyErrorComponent {
  @Input() public error: any;

  public getErrorMessage(): string {
    return EasyErrorUtil.getErrorMessage(this.error);
  }
}
