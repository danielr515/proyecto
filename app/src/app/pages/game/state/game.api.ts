import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { AppApi } from 'src/core/state/app.api';

@Injectable({
  providedIn: 'root'
})
export class GameApi extends AppApi {

  constructor(private chttp: HttpClient) {
    super(chttp);
  }

  getOwnData(player) {
    let headers = new HttpHeaders();

    let queryParams = new HttpParams();

    queryParams = this.appendQueryParams(queryParams, { player: player.uname });
    headers = headers.set('Authorization', 'Bearer ' + player.token);
    headers = headers.set('Access-Control-Expose-Headers', 'Authorization');

    const options = {
      observe: 'response' as 'body',
      headers,
      params: queryParams
    };

    return this.http.get<HttpResponse<any>>(this.API + '/ownData', options);
  }

  getEnemyData(room, turn, player) {
    let headers = new HttpHeaders();
    let queryParams = new HttpParams();

    queryParams = this.appendQueryParams(queryParams, { room, turn, player: player.uname });
    headers = headers.set('Authorization', 'Bearer ' + player.token);
    headers = headers.set('Access-Control-Expose-Headers', 'Authorization');

    const options = {
      observe: 'response' as 'body',
      headers,
      params: queryParams
    };

    return this.http.get<HttpResponse<any>>(this.API + '/enemyData', options);
  }

  isGameStarted(player) {
    let headers = new HttpHeaders();
    let queryParams = new HttpParams();

    queryParams = this.appendQueryParams(queryParams, { player: player.uname });
    headers = headers.set('Authorization', 'Bearer ' + player.token);
    headers = headers.set('Access-Control-Expose-Headers', 'Authorization');

    const options = {
      observe: 'response' as 'body',
      headers,
      params: queryParams
    };

    return this.http.get<HttpResponse<any>>(this.API + '/isGameStarted', options);
  }

  selectCharacter(character, room, turn, player) {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + player.token);
    headers = headers.set('Access-Control-Expose-Headers', 'Authorization');

    const options = {
      observe: 'response' as 'body',
      headers
    };

    return this.http.post(this.API + '/selectCharacter', { character, room, turn, player: player.uname }, options);
  }

  isSelectedCharacterEnemy(room, turn, player) {
    let headers = new HttpHeaders();
    let queryParams = new HttpParams();

    queryParams = this.appendQueryParams(queryParams, { player: player.uname, room, turn });
    headers = headers.set('Authorization', 'Bearer ' + player.token);
    headers = headers.set('Access-Control-Expose-Headers', 'Authorization');

    const options = {
      observe: 'response' as 'body',
      headers,
      params: queryParams
    };

    return this.http.get<HttpResponse<any>>(this.API + '/isSelectedCharacterEnemy', options);

  }

  selectAction(action, room, turn, player) {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + player.token);
    headers = headers.set('Access-Control-Expose-Headers', 'Authorization');

    const options = {
      observe: 'response' as 'body',
      headers
    };

    return this.http.post(this.API + '/selectAction', { action, room, turn, player: player.uname }, options);
  }
  isSelectedActionEnemy(room, turn, player) {
    let headers = new HttpHeaders();
    let queryParams = new HttpParams();

    queryParams = this.appendQueryParams(queryParams, { player: player.uname, room, turn });
    headers = headers.set('Authorization', 'Bearer ' + player.token);
    headers = headers.set('Access-Control-Expose-Headers', 'Authorization');

    const options = {
      observe: 'response' as 'body',
      headers,
      params: queryParams
    };

    return this.http.get<HttpResponse<any>>(this.API + '/isSelectedActionEnemy', options);
  }
}
