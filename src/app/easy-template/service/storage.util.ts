import { AppRoute } from '../model/app-route';
import { EasyStorageUtil } from './easy-storage.util';

export class StorageUtil extends EasyStorageUtil {

  private static KEY_AFTER_LOGIN: string = 'KEY_AFTER_LOGIN';

  public static setAfterLogin(route: any): void {
    if (!Array.isArray(route) || !route.join('').startsWith('/project')) {
      return;
    }
    this.set(StorageUtil.KEY_AFTER_LOGIN, route);
  }

  public static getAfterLogin(): AppRoute {
    return this.getAndForget(StorageUtil.KEY_AFTER_LOGIN);
  }
}
