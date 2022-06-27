import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  template: '<h1>Hello World</h1>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlaceholderComponent {
}
