import { Injectable } from '@angular/core';
import { RoomsApi } from './Rooms.api';
import { RoomsAction } from './Rooms.actions';
import { RoomsQuery } from './rooms.query';
import { HttpResponse } from '@angular/common/http';
import { AppQuery } from 'src/core/state/app.query';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  constructor(
    private api: RoomsApi,
    private action: RoomsAction,
    private query: RoomsQuery,
    private appQuery: AppQuery
  ) { }

  createRoom(room) {
    this.api.createRoom(room, this.getTokenAndUname()).subscribe((response: HttpResponse<any>) => {
      if (response.ok) {
        console.log(response);
      }
    });
  }

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