import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
  selector: 'card-buttons',
  templateUrl: 'card-buttons.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardButtonsComponent {
  @HostBinding('class') public class = 'easy-card-buttons';
}
