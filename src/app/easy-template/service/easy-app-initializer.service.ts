import { Injectable, Injector } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import * as moment from 'moment';
import { EasyDateUtil } from './easy-date.util';

export let AppInjector: Injector;

@Injectable()
export class EasyAppInitializerService {

  constructor(protected injector: Injector, private _adapter: DateAdapter<any>) {
    console.log('init');
    AppInjector = injector;
  }

  public init(): Promise<any> {
    this._adapter.setLocale(EasyDateUtil.LOCALE);
    moment.locale(EasyDateUtil.LOCALE);
    return Promise.resolve();
  }
}
