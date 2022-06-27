import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routingConfiguration } from './easy-template/service/easy-route-config.component';
import { PlaceholderComponent } from './easy-template/component/placeholder.component';

const routes: Routes = [
  {path: '', component: PlaceholderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routingConfiguration)],
  exports: [RouterModule]
})
export class AppRoutes {
}
