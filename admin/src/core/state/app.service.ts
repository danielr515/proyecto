import { Injectable } from '@angular/core';
import { AppApi } from './app.api';
import { AppAction } from './app.actions';
import { AppQuery } from './app.query';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(
    private api: AppApi,
    private action: AppAction,
    private query: AppQuery
  ) { }
  updateUser(user) {
    this.action.updateUser(user);
  }
  login(user) {
    this.api.login(user).subscribe((elem: HttpResponse<any>) => {
      const token = elem.headers.get('Authorization').split(' ')[1];
      this.action.updateSessionToken(token);
    });
  }
  logout() {
    console.log('logout');
    // this.api.logout(token).subscribe((elem: HttpResponse<any>) => {
    //   const token = elem.headers.get('Authorization').split(' ')[1];
    //   this.action.updateSessionToken(token);
    // });
  }
}
