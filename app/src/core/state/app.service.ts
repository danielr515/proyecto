import { Injectable } from '@angular/core';
import { AppApi } from './app.api';
import { AppAction } from './app.actions';
import { AppQuery } from './app.query';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(
    private api: AppApi,
    private action: AppAction,
    private query: AppQuery,
    private router: Router
  ) { }

  updateUser(user) {
    this.action.updateUser(user);
  }

  updateSessionToken(token) {
    this.action.updateSessionToken(token);
  }
  login(user) {
    this.api.login(user).subscribe((response: HttpResponse<any>) => {
      if (response.ok) {
        const token = response.headers.get('Authorization').split(' ')[1];
        this.action.updateSessionToken(token);
        this.action.updateUser(user);
        this.router.navigate(['/tabs']);
      }
    });
  }

  logout() {
    this.api.logout(this.getTokenAndUname()).subscribe((response: HttpResponse<any>) => {
      if (response.ok) {
        this.action.deleteSessionToken();
        this.router.navigate(['login']);
      }
    });
  }

  register(user) {
    this.api.register(user).subscribe((response: HttpResponse<any>) => {
      if (response.ok) {
        console.log(response);
        this.login(user);
      }
    });
  }

  getTokenAndUname() {
    const data = { token: '', uname: '' };
    this.query.selectSessionToken().subscribe(tk => {
      data.token = tk;
    });
    this.query.selectUname().subscribe(uname => {
      data.uname = uname;
    });
    return data;
  }
}
