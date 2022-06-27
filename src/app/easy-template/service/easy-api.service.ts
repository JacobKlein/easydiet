import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class EasyApiService {

  constructor(protected http: HttpClient) {
  }

  public get(url: string): Observable<any> {
    return this.http.get(url, this.options());
  }

  public post(url: string, body?: any): Observable<any> {
    return this.http.post(url, body, this.options());
  }

  public put(url: string, body?: any): Observable<any> {
    return this.http.put(url, body, this.options());
  }

  public delete(url: string): Observable<any> {
    return this.http.delete(url, this.options());
  }

  // noinspection JSMethodCanBeStatic
  private options(): any {
    return {withCredentials: true, headers: new HttpHeaders({'Content-Type': 'application/json'})};
  }


}
