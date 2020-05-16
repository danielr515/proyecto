import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { AppApi } from 'src/core/state/app.api';

@Injectable({
  providedIn: 'root'
})
export class SkillsApi extends AppApi {

  constructor(private chttp: HttpClient) {
    super(chttp);
  }

  getAllSkills(token) {
    let headers = new HttpHeaders();

    headers = headers.set('Authorization', 'Bearer ' + token);
    headers = headers.set('Access-Control-Expose-Headers', 'Authorization');

    const options = {
      observe: 'response' as 'body',
      headers
    };

    return this.http.get<HttpResponse<any>>(this.API + '/skills', options);
  }

  addSkill(skill, admin) {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + admin.token);
    headers = headers.set('Access-Control-Expose-Headers', 'Authorization');

    const options = {
      observe: 'response' as 'body',
      headers
    };

    return this.http.post(this.API + '/addSkill', { skill, admin: admin.uname }, options);
  }

}
