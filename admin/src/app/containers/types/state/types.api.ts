import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { FullType } from './types.model';
import { AppApi } from 'src/core/state/app.api';

@Injectable({
  providedIn: 'root'
})
export class TypesApi extends AppApi {

  constructor(private chttp: HttpClient) {
    super(chttp);
  }

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
}
