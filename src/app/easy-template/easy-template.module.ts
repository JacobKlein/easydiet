import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EasyErrorComponent } from './component/core/easy-error.component';
import { EasyStateComponent } from './component/core/easy-state.component';
import { LoadingComponent } from './component/core/loading.component';
import { EasyAutocompleteFieldComponent } from './component/form/easy-autocomplete-field.component';
import { EasyCheckboxFieldComponent } from './component/form/easy-checkbox-field.component';
import { EasyDateFieldComponent } from './component/form/easy-date-field.component';
import { EasyFieldComponent } from './component/form/easy-field.component';
import { EasyFileFieldComponent } from './component/form/easy-file-field.component';
import { EasyFormComponent } from './component/form/easy-form.component';
import { EasySelectFieldComponent } from './component/form/easy-select-field.component';
import { EasyTextFieldComponent } from './component/form/easy-text-field.component';
import { EasyIconDeleteComponent } from './component/icon/easy-icon-delete.component';
import { ButtonComponent } from './component/layout/button.component';
import { CardButtonsComponent } from './component/layout/card-buttons.component';
import { CardContentsComponent } from './component/layout/card-contents.component';
import { CardTitleComponent } from './component/layout/card-title.component';
import { CardComponent } from './component/layout/card.component';
import { EasyButtonIconComponent } from './component/layout/easy-button-icon.component';
import { EasyTitleComponent } from './component/layout/easy-title.component';
import { AppService } from './service/app.service';
import { EasyApiService } from './service/easy-api.service';
import { EasyFieldErrorPipe } from './service/pipe/easy-field-error.pipe';

const layoutComponents: Array<any> = [
  ButtonComponent,
  CardComponent,
  CardButtonsComponent,
  CardContentsComponent,
  CardTitleComponent,
  EasyTitleComponent,
  EasyButtonIconComponent
];
const coreComponents: Array<any> = [
  LoadingComponent,
  EasyErrorComponent,
  EasyStateComponent,
];

const iconComponents: Array<any> = [
  EasyIconDeleteComponent
];

const formComponents: Array<any> = [
  EasyAutocompleteFieldComponent,
  EasyCheckboxFieldComponent,
  EasyDateFieldComponent,
  EasyFormComponent,
  EasyFieldComponent,
  EasyFileFieldComponent,
  EasySelectFieldComponent,
  EasyTextFieldComponent
];

const pipes: Array<any> = [EasyFieldErrorPipe];

@NgModule({
  declarations: [
    ...coreComponents,
    ...formComponents,
    ...iconComponents,
    ...layoutComponents,
    ...pipes
  ],
  imports: [
    // Angular
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // Material
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatMomentDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatSelectModule,
    MatIconModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    DragDropModule,
    MatStepperModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule

  ],
  exports: [
    ...coreComponents,
    ...formComponents,
    ...iconComponents,
    ...layoutComponents,
    EasyFieldErrorPipe,
  ],
  providers: [...pipes, EasyApiService, AppService]
})
export class EasyTemplateModule {
}
