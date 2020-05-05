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
      if (elem.ok) {
        const token = elem.headers.get('Authorization').split(' ')[1];
        this.action.updateSessionToken(token);
      }
    });
  }
  logout() {
    console.log('logout');
    let token = '';
    let uname = '';
    this.query.selectSessionToken().subscribe(tk => {
      token = tk;
    });
    this.query.selectUser().subscribe(user => {
      uname = user.uname;
    });
    this.api.logout(token, uname).subscribe((elem: HttpResponse<any>) => {
      console.log('ok');

      console.log(elem.ok);
      if (elem.ok) {
        this.action.deleteSessionToken();
      }
    });


  }
}
