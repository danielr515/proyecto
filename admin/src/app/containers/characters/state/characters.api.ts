import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharactersApi {
  // que el resto de api extiendan esta para que puedan pillar el enlace y tal
  readonly API = 'http://192.168.1.155:1080/ws/index.php';

  constructor(private http: HttpClient) { }

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

  appendQueryParams(queryParams, filterParams) {
    for (const [key, value] of Object.entries(filterParams)) {
      if (value) {
        queryParams = queryParams.Charactersend(key, value);
      }
    }
    return queryParams;
  }
}
