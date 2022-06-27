import { Component } from '@angular/core';
import { map, Observable, startWith } from 'rxjs';
import { EasyFieldOption } from '../../model/form/easy-field-option';
import { EasyAbstractFieldComponent } from './easy-abstract-field.component';


@Component({
  selector: 'easy-autocomplete-field',
  templateUrl: 'easy-autocomplete-field.component.html'
})
export class EasyAutocompleteFieldComponent extends EasyAbstractFieldComponent {

  public filteredOptions: Observable<Array<EasyFieldOption>>;

  public ngOnInit(): void {
    this.filteredOptions = this.getFormControl().valueChanges
      .pipe(startWith<string | EasyFieldOption>(''),
        map((value: string | EasyFieldOption) =>
          (value == null || typeof value === 'string') ? value : value.label),
        map((name: any) => name ? this.filter(name) : this.getFieldOptions().slice()));
  }

  public displayAutoComplete(): (id: string) => string {
    return (id: string) => {
      const correspondingOption = this.getFieldOptions()
        .find(option => id != null && (option.value === id));
      return correspondingOption != null ? correspondingOption.label : '';
    }
  }

  private filter(name: string): EasyFieldOption[] {
    const filterValue = name.toLowerCase();
    const options = this.getFieldOptions().filter(option => {
      return option.label != null && option.label.toLowerCase().indexOf(filterValue) !== -1
    });

    const noOption = {label: 'No options available', selectable: false};
    return options.length == 0 ? [noOption] : options;
  }
}
