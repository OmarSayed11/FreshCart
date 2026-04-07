import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { MyPlatform } from '../myPlatform/my-platform';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private readonly http: HttpClient = inject(HttpClient);
  private readonly myPlatform: MyPlatform = inject(MyPlatform);

  isLogged = signal<boolean>(false);
  constructor() {
    if (this.myPlatform.checkBrowserPlatform()) {
      console.log('trueeeeeeee');
      this.checkLogged();
    }
  }

  signIn(data: object): Observable<any> {
    return this.http.post(`${environment.baseUrl}/api/v1/auth/signin`, data);
  }
  signUp(data: object): Observable<any> {
    return this.http.post(`${environment.baseUrl}/api/v1/auth/signup`, data);
  }
  forgetPassword(data: object): Observable<any> {
    return this.http.post(`${environment.baseUrl}/api/v1/auth/forgotPasswords`, data);
  }
  verifyResetCode(data: object): Observable<any> {
    return this.http.post(`${environment.baseUrl}/api/v1/auth/verifyResetCode`, data);
  }
  resetPassword(data: object): Observable<any> {
    return this.http.put(`${environment.baseUrl}/api/v1/auth/resetPassword`, data);
  }
  checkLogged() {
    if (localStorage.getItem('token')) {
      this.isLogged.set(true);
    } else {
      this.isLogged.set(false);
    }
  }
}
