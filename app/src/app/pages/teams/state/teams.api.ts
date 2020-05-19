import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams, HttpHeaders } from '@angular/common/http';
// import { } from './Teams.model';
import { AppApi } from 'src/core/state/app.api';

@Injectable({
  providedIn: 'root'
})
export class TeamsApi extends AppApi {

  constructor(private chttp: HttpClient) {
    super(chttp);
  }

  getTeams(player) {
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

    return this.http.get<HttpResponse<any>>(this.API + '/teamsByPlayer', options);
  }

}
