import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { EasyColour } from '../../model/easy-colour';

@Component({
  selector: 'card',
  templateUrl: 'card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {

  @HostBinding('class') public componentClass: string;
  public componentClasses: Array<string> = [];
  @Input() public colour: EasyColour;

  public ngOnInit(): void {
    this.componentClasses = ['easy-card'];
    if (this.colour != null) {
      this.componentClasses.push('easy-card-' + this.colour);
    }
    this.componentClass = this.componentClasses.join(' ');
  }
}
