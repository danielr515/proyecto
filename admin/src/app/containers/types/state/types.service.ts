import { Injectable } from '@angular/core';
import { TypesApi } from './types.api';
import { TypesAction } from './types.actions';
import { TypesQuery } from './types.query';
import { HttpResponse } from '@angular/common/http';
import { AppQuery } from 'src/core/state/app.query';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TypesService {
  constructor(
    private api: TypesApi,
    private action: TypesAction,
    private query: TypesQuery,
    private appQuery: AppQuery
  ) { }

  updateAllFullTypes() {
    this.api.getAllFullTypes(this.getToken()).subscribe((response: HttpResponse<any>) => {
      if (response.ok) {
        this.action.updateTypes(response.body);
      }
    });
  }

  addType(type) {
    this.api.addType(type, this.getTokenAndUname()).subscribe((response: HttpResponse<any>) => {
      console.log(response);
    });
  }

  editRelation(typesrelation) {
    this.api.editRelation(typesrelation, this.getTokenAndUname()).subscribe((response: HttpResponse<any>) => {
      console.log(response);
    });
  }
  getTokenAndUname() {
    const data = { token: '', uname: '' };
    this.appQuery.selectSessionToken().subscribe(tk => {
      data.token = tk;
    });
    this.appQuery.selectUser().subscribe(user => {
      data.uname = user.uname;
    });
    return data;
  }
  getToken() {
    let token = '';
    this.appQuery.selectSessionToken().pipe(take(1)).subscribe(tk => {
      token = tk;
    });
    return token;
  }

}
