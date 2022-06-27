import { DragDropModule } from '@angular/cdk/drag-drop';
import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

import { AppRoutes } from './app.routes';
import { EasyTemplateModule } from './easy-template/easy-template.module';
import { PlaceholderComponent } from './easy-template/component/placeholder.component';


// noinspection JSUnusedGlobalSymbols
// const budgetProviders: Array<any> = [
//   EasyDialogService,
//   BudgetAppInitializer,
//   RouterService,
//   OnlineProjectService,
//   {
//     provide: APP_INITIALIZER,
//     useFactory: (myInitService: BudgetAppInitializer) => () => myInitService.init(),
//     deps: [BudgetAppInitializer, OnlineProjectService, ...itemServices],
//     multi: true
//   },
//   EasyToastService
// ];
const productionProviders: Array<any> = environment.production ? [
  {provide: APP_BASE_HREF, useValue: '/app'},
] : [];

@NgModule({
  declarations: [
    AppComponent,
    PlaceholderComponent
  ],
  entryComponents: [],
  imports: [
    EasyTemplateModule,
    // Misc
    BrowserModule,
    AppRoutes,
    BrowserAnimationsModule,
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
  providers: [
    ...productionProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
