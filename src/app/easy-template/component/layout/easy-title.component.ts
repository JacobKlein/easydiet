import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'easy-title',
  template: '<h1 class="easy-title"><ng-content></ng-content></h1><hr>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EasyTitleComponent {
}
