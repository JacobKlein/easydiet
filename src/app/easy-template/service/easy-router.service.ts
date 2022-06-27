import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoute } from '../model/app-route';
import { AppInjector } from './easy-app-initializer.service';


@Injectable()
export class EasyRouterService {

  protected router: Router;

  constructor() {
    this.router = AppInjector.get(Router);
  }

  public navigate(route: AppRoute): void {
    this.router.navigate(route).then(() => {
    }, (error) => {
      console.error(error);
    })
  }
}
