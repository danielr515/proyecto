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



}
