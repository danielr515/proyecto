import { Injectable } from '@angular/core';
import { GameApi } from './game.api';
import { GameAction } from './game.actions';
import { GameQuery } from './game.query';
import { HttpResponse } from '@angular/common/http';
import { AppQuery } from 'src/core/state/app.query';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  constructor(
    private api: GameApi,
    private action: GameAction,
    private query: GameQuery,
    private appQuery: AppQuery,
    private router: Router
  ) { }

  updateOwnData() {
    this.api.getOwnData(this.getTokenAndUname()).subscribe((response: HttpResponse<any>) => {
      if (response.ok) {
        this.action.updateOwnData(response.body);
      }
    });
  }

  updateEnemyData(room, turn) {
    this.api.getEnemyData(room, turn, this.getTokenAndUname()).subscribe((response: HttpResponse<any>) => {
      if (response.ok) {
        this.action.updateEnemyData(response.body);
      }
    });
  }

  isGameStarted() {
    this.api.isGameStarted(this.getTokenAndUname()).subscribe((response: HttpResponse<any>) => {
      if (response.ok) {
        this.action.updateGameStarted(response.body);
      }
    });
  }
  selectCharacter(character, room, turn) {
    this.api.selectCharacter(character, room, turn, this.getTokenAndUname()).subscribe((response: HttpResponse<any>) => {
      if (response.ok) {
        this.updateOwnData();
      }
    });
  }

  isSelectedCharacterEnemy(room, turn) {
    this.api.isSelectedCharacterEnemy(room, turn, this.getTokenAndUname()).subscribe((response: HttpResponse<any>) => {
      if (response.ok) {
        this.action.updateSelectedCharacterEnemy(response.body);
      }
    });
  }

  selectAction(action, room, turn) {
    this.api.selectAction(action, room, turn, this.getTokenAndUname()).subscribe((response: HttpResponse<any>) => {
      if (response.ok) {
      }
    });
  }

  isSelectedActionEnemy(room, turn) {
    this.api.isSelectedActionEnemy(room, turn, this.getTokenAndUname()).subscribe((response: HttpResponse<any>) => {
      if (response.ok) {
        this.action.updateSelectedActionEnemy(response.body);
      }
    });
  }
  resetAction(room, turn) {
    this.api.resetAction(room, turn, this.getTokenAndUname()).subscribe((response: HttpResponse<any>) => {
      if (response.ok) {
      }
    });
  }
  getTokenAndUname() {
    const data = { token: '', uname: '' };
    this.appQuery.selectSessionToken().subscribe(tk => {
      data.token = tk;
    });
    this.appQuery.selectUname().subscribe(uname => {
      data.uname = uname;
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
