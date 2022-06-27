export class EasyFileUtil {

  public static createDownload(filename: string, text: string): void {
    const blob = new Blob([text]);
    const elem = window.document.createElement('a');
    elem.href = window.URL.createObjectURL(blob);
    elem.download = filename;
    document.body.appendChild(elem);
    elem.click();
    document.body.removeChild(elem);
  }

  public static readJson(file: File): Promise<any> {
    return new Promise<string>((resolve, reject) => {
      this.readFile(file).then((contents) => {
        try {
          const json = JSON.parse(contents);
          resolve(json);
        } catch (error) {
          reject(error);
        }
      }, (error) => {
        reject(error);
      });
    });
  }

  public static readFile(file: File): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      const fileRead = new FileReader();
      fileRead.onload = () => {
        if (fileRead.result == null) {
          resolve(null);
          return;
        } else if (typeof fileRead.result === 'string') {
          resolve(fileRead.result);
          return;
        } else {
          // @ts-ignore
          resolve(String.fromCharCode.apply(null, new Uint16Array(fileRead.result)));
        }
      };
      fileRead.onerror = (e) => {
        console.error(e);
        reject();
      };
      fileRead.readAsText(file);
    });
  }

  static clearFileEvent(event: any): void {
    event.target.value = null;
  }
}
