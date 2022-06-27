import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'card-contents',
  templateUrl: 'card-contents.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardContentsComponent {

  public ignoreDraggable(event: any): void {
    event.stopPropagation();
  }
}
