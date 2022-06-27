import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges } from '@angular/core';
import { ComponentState } from '../../model/component-state';
import { EasyErrorUtil } from '../../service/easy-error.util';

@Component({
  selector: 'easy-state',
  templateUrl: 'easy-state.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EasyStateComponent implements OnChanges {

  @Input() public state: ComponentState;

  constructor(protected cd: ChangeDetectorRef) {
  }


  public ngOnChanges(): void {
    this.cd.markForCheck();
  }

  public getErrorMessage(): string {
    return EasyErrorUtil.getErrorMessage(this.state.exception);
  }
}
