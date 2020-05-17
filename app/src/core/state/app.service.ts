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
  login(user) {
    this.api.login(user).subscribe((elem: HttpResponse<any>) => {
      if (elem.ok) {
        const token = elem.headers.get('Authorization').split(' ')[1];
        this.action.updateSessionToken(token);
        this.action.updateUser(user);
        this.router.navigate(['/tabs']);
      }
    });
  }

  logout() {
    let token = '';
    let uname = '';
    this.query.selectSessionToken().subscribe(tk => {
      token = tk;
    });
    this.query.selectUser().subscribe(user => {
      uname = user.uname;
    });
    this.api.logout(token, uname).subscribe((elem: HttpResponse<any>) => {
      if (elem.ok) {
        this.action.deleteSessionToken();
      }
    });
  }

  register(user) {
    this.api.register(user).subscribe((elem: HttpResponse<any>) => {
      if (elem.ok) {
        this.login(user);
      }
    });
  }
}
