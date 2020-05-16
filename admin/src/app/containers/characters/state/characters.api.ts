import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { AppApi } from 'src/core/state/app.api';

@Injectable({
  providedIn: 'root'
})
export class CharactersApi extends AppApi {

  constructor(private chttp: HttpClient) {
    super(chttp);
  }

  getAllCharacters(token) {
    let headers = new HttpHeaders();

    headers = headers.set('Authorization', 'Bearer ' + token);
    headers = headers.set('Access-Control-Expose-Headers', 'Authorization');

    const options = {
      observe: 'response' as 'body',
      headers
    };

    return this.http.get<HttpResponse<any>>(this.API + '/characters', options);
  }

  addCharacter(character, admin) {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + admin.token);
    headers = headers.set('Access-Control-Expose-Headers', 'Authorization');

    const options = {
      observe: 'response' as 'body',
      headers
    };

    return this.http.post(this.API + '/addCharacter', { character, admin: admin.uname }, options);
  }

}
