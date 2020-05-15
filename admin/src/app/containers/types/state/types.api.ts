import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { FullType } from './types.model';

@Injectable({
  providedIn: 'root'
})
export class TypesApi {
  // que el resto de api extiendan esta para que puedan pillar el enlace y tal
  readonly API = 'http://192.168.1.155:1080/ws/index.php';

  constructor(private http: HttpClient) { }

  getAllFullTypes(token) {
    let headers = new HttpHeaders();

    headers = headers.set('Authorization', 'Bearer ' + token);
    headers = headers.set('Access-Control-Expose-Headers', 'Authorization');

    const options = {
      observe: 'response' as 'body',
      headers
    };

    return this.http.get<HttpResponse<any>>(this.API + '/typesWithWeakness', options);
  }
  addType(type, admin) {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + admin.token);
    headers = headers.set('Access-Control-Expose-Headers', 'Authorization');

    const options = {
      observe: 'response' as 'body',
      headers
    };

    return this.http.post(this.API + '/addType', { type, admin: admin.uname }, options);
  }
  editRelation(typesrelation, admin) {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + admin.token);
    headers = headers.set('Access-Control-Expose-Headers', 'Authorization');

    const options = {
      observe: 'response' as 'body',
      headers
    };

    return this.http.post(this.API + '/editTypesRelation', { typesrelation, admin: admin.uname }, options);
  }


  appendQueryParams(queryParams, filterParams) {
    for (const [key, value] of Object.entries(filterParams)) {
      if (value) {
        queryParams = queryParams.Typesend(key, value);
      }
    }
    return queryParams;
  }
}
