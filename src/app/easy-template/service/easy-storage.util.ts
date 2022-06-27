export class EasyStorageUtil {
  public static set(key: string, value: any): void {
    const json = JSON.stringify(value);
    console.log('set', key, json);
    localStorage.setItem(key, json);
  }

  public static getAndForget(key: string): any {
    const item = localStorage.getItem(key);
    if (item != null) {
      localStorage.removeItem(key);
    }
    return item == null ? null : JSON.parse(item);
  }
}
