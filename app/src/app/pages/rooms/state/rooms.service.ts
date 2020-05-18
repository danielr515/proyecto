import { Injectable } from '@angular/core';
import { RoomsApi } from './Rooms.api';
import { RoomsAction } from './Rooms.actions';
import { RoomsQuery } from './rooms.query';
import { HttpResponse } from '@angular/common/http';
import { AppQuery } from 'src/core/state/app.query';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  constructor(
    private api: RoomsApi,
    private action: RoomsAction,
    private query: RoomsQuery,
    private appQuery: AppQuery,
    private router: Router
  ) { }

  updateWaitingRooms() {
    this.api.getWaitingRooms(this.getToken()).subscribe((response: HttpResponse<any>) => {
      if (response.ok) {
        this.action.updateWaitingRooms(response.body);
      }
    });
  }

  createRoom(room) {
    this.api.createRoom(room, this.getTokenAndUname()).subscribe((response: HttpResponse<any>) => {
      if (response.ok) {
        this.router.navigate(['/tabs']);
      }
    });
  }
  enterRoom(id, passwd = '') {
    this.api.enterRoom(id, passwd, this.getTokenAndUname()).subscribe((response: HttpResponse<any>) => {
      if (response.ok) {
        this.router.navigate(['/rooms', id]);
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
