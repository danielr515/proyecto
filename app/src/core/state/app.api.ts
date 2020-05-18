import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { User } from './app.model';

@Injectable({
  providedIn: 'root'
})
export class AppApi {
  // que el resto de api extiendan esta para que puedan pillar el enlace y tal
  readonly API = 'http://192.168.1.155:1080/ws/index.php';

  constructor(public http: HttpClient) { }

  login(user: User) {
    let queryParams = new HttpParams();

    queryParams = this.appendQueryParams(queryParams, user);

    const options = {
      observe: 'response' as 'body',
      params: queryParams
    };

    return this.http.get<HttpResponse<any>>(this.API + '/loginPlayer', options);
  }

  logout(player) {
    let headers = new HttpHeaders();

    headers = headers.set('Authorization', 'Bearer ' + player.token);
    headers = headers.set('Access-Control-Expose-Headers', 'Authorization');

    const options = {
      observe: 'response' as 'body',
      headers
    };

    return this.http.post(this.API + '/logoutPlayer', { uname: player.uname }, options);
  }

  register(user) {
    const options = {
      observe: 'response' as 'body',
    };

    return this.http.post(this.API + '/registerPlayer', { user }, options);
  }
  appendQueryParams(queryParams, filterParams) {
    for (const [key, value] of Object.entries(filterParams)) {
      if (value) {
        queryParams = queryParams.append(key, value);
      }
    }
    return queryParams;
  }
}
