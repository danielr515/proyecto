import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams, HttpHeaders } from '@angular/common/http';
// import { } from './rooms.model';
import { AppApi } from 'src/core/state/app.api';

@Injectable({
  providedIn: 'root'
})
export class RoomsApi extends AppApi {

  constructor(private chttp: HttpClient) {
    super(chttp);
  }

  getWaitingRooms(token) {
    let headers = new HttpHeaders();

    headers = headers.set('Authorization', 'Bearer ' + token);
    headers = headers.set('Access-Control-Expose-Headers', 'Authorization');

    const options = {
      observe: 'response' as 'body',
      headers
    };

    return this.http.get<HttpResponse<any>>(this.API + '/waitingRooms', options);
  }
  createRoom(room, player) {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + player.token);
    headers = headers.set('Access-Control-Expose-Headers', 'Authorization');

    const options = {
      observe: 'response' as 'body',
      headers
    };

    return this.http.post(this.API + '/createRoom', { room, player: player.uname }, options);
  }

  enterRoom(id, passwd, player) {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + player.token);
    headers = headers.set('Access-Control-Expose-Headers', 'Authorization');

    const options = {
      observe: 'response' as 'body',
      headers
    };

    return this.http.post(this.API + '/enterRoom', { id, passwd, player: player.uname }, options);
  }
}
