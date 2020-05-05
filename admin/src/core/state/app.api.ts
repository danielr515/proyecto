import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { User } from './app.model';

@Injectable({
  providedIn: 'root'
})
export class AppApi {
  // que el resto de api extiendan esta para que puedan pillar el enlace y tal
  readonly API = 'http://192.168.1.155:1080/ws/index.php';

  constructor(private http: HttpClient) { }

  login(user: User) {
    let queryParams = new HttpParams();
    queryParams = this.appendQueryParams(queryParams, user);

    const options = {
      observe: 'response' as 'body',
      params: queryParams
    };
    return this.http.get<HttpResponse<any>>(this.API + '/loginAdmin', options);
  }

  logout(token: string, uname: string) {
    console.log(token);
    console.log(uname);

    // let queryParams = new HttpParams();
    // queryParams = this.appendQueryParams(queryParams, { uname });
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + token);
    headers = headers.set('Access-Control-Expose-Headers', 'Authorization');
    const options = {
      observe: 'response' as 'body',
      headers
    };

    return this.http.post(this.API + '/logoutAdmin', { uname }, options);
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
