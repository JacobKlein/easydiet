import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { EasyColour } from '../../model/easy-colour';

@Component({
  selector: 'easy-button',
  templateUrl: 'button.component.html'
})
export class ButtonComponent {
  @Input() public color: EasyColour;
  @Input() public disabled: boolean;

  public getColor(): ThemePalette {
    return this.color as ThemePalette;
  }
}
