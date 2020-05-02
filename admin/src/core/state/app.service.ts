import { Injectable } from '@angular/core';
import { AppApi } from './app.api';
import { AppAction } from './app.actions';
import { AppQuery } from './app.query';

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
    this.api.login(user).subscribe(elem => {
      // this.action.updateUser(elem);
      console.log(elem);
    })
  }
}
