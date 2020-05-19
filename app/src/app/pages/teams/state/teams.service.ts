import { Injectable } from '@angular/core';
import { TeamsApi } from './teams.api';
import { TeamsAction } from './teams.actions';
import { TeamsQuery } from './teams.query';
import { HttpResponse } from '@angular/common/http';
import { AppQuery } from 'src/core/state/app.query';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  constructor(
    private api: TeamsApi,
    private action: TeamsAction,
    private query: TeamsQuery,
    private appQuery: AppQuery,
    private router: Router
  ) { }


  getTokenAndUname() {
    const data = { token: '', uname: '' };
    this.appQuery.selectSessionToken().subscribe(tk => {
      data.token = tk;
    });
    this.appQuery.selectUname().subscribe(uname => {
      data.uname = uname;
    });
    return data;
  }
  getToken() {
    let token = '';
    this.appQuery.selectSessionToken().pipe(take(1)).subscribe(tk => {
      token = tk;
    });
    return token;
  }

}
