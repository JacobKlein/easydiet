import { Injectable } from '@angular/core';
import packageJson from '../../../../package.json';

@Injectable()
export class AppService {

  //==== tsconfig.json ==========//
  // "compilerOptions": {
  //   ...
  //   "resolveJsonModule": true,
  //   "allowSyntheticDefaultImports": true,
  //   ...

  public static getTitle(): any {
    return packageJson.title;
  }

  public static getVersion(): any {
    return packageJson.version;
  }

  public getTitle(): any {
    return AppService.getTitle();
  }

  public getVersion(): any {
    return AppService.getVersion();
  }
}
