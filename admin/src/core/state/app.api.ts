import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http';
import { User } from './app.model';

@Injectable({
  providedIn: 'root'
})
export class AppApi {
  // que el resto de api extiendan esta para que puedan pillar el enlace y tal
  readonly API = 'http://192.168.1.155:1080/ws/index.php/loginAdmin';

  constructor(private http: HttpClient) { }

  login(user: User) {
    let queryParams = new HttpParams();
    queryParams = this.appendQueryParams(queryParams, user);

    const options = {
      observe: 'response' as 'body',
      params: queryParams
    };
    return this.http.get<HttpResponse<any>>(this.API, options);
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
