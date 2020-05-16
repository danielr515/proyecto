import { Injectable } from '@angular/core';
import { CharactersApi } from './Characters.api';
import { CharactersAction } from './characters.actions';
import { CharactersQuery } from './Characters.query';
import { HttpResponse } from '@angular/common/http';
import { AppQuery } from 'src/core/state/app.query';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  constructor(
    private api: CharactersApi,
    private action: CharactersAction,
    private query: CharactersQuery,
    private appQuery: AppQuery
  ) { }

  updateAllCharacters() {
    this.api.getAllCharacters(this.getToken()).subscribe((response: HttpResponse<any>) => {
      if (response.ok) {
        this.action.updateCharacters(response.body);
      }
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
