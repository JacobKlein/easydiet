import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

import { AppRoutes } from './app.routes';
import { EasyDietModule } from './easy-diet/easy-diet.module';
import { PlaceholderComponent } from './easy-template/component/placeholder.component';
import { EasyTemplateModule } from './easy-template/easy-template.module';


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
  {provide: APP_BASE_HREF, useValue: '/easydiet'},
] : [];

@NgModule({
  declarations: [
    AppComponent,
    PlaceholderComponent
  ],
  entryComponents: [],
  imports: [
    EasyTemplateModule,
    EasyDietModule,
    AppRoutes,
  ],
  providers: [
    ...productionProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
