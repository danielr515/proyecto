import { Component, OnInit } from '@angular/core';
import { GameService } from './state/game.service';
import { GameQuery } from './state/game.query';
import { take, concatAll } from 'rxjs/operators';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {
  ownData$ = this.query.selectOwnData();
  enemyData$ = this.query.selectEnemyData();
  gameStarted$ = this.query.selectGameStarted();
  selectedCharacterEnemy$ = this.query.selectSelectedCharacterEnemy();
  intervalStart;
  intervalSelectChar;
  intervalSelectAction;
  room;
  turn = 0;
  constructor(
    private service: GameService,
    private query: GameQuery
  ) { }

  ngOnInit() {
    this.service.isGameStarted();
    this.intervalStart = setInterval(() => { this.isGameStarted(); }, 3000);

    // this.service.updateEnemyData();

  }

  isGameStarted() {
    this.gameStarted$.pipe(take(1)).subscribe(elem => {
      if (elem) {
        clearInterval(this.intervalStart);
        this.service.updateOwnData();
        this.ownData$.subscribe(elem => {
          if (elem.currchar != null) {
            this.room = elem.roomid;
            this.turn = elem.turn;
            this.intervalSelectChar = setInterval(() => { this.enemySelectedCharacter(); }, 3000);
          }
        });
      } else {
        this.service.isGameStarted();
      }
    });
  }

  selectCharacter(character) {
    this.ownData$.pipe(take(1)).subscribe(elem => {
      this.room = elem.roomid;
      this.turn = elem.turn;
      this.service.selectCharacter(character, elem.roomid, elem.turn);
      this.service.isSelectedCharacterEnemy(elem.roomid, elem.turn);
    });
    // this.intervalSelectChar = setInterval(() => { this.enemySelectedCharacter(); }, 3000);
  }

  enemySelectedCharacter() {
    this.selectedCharacterEnemy$.pipe(take(1)).subscribe(elem => {
      if (elem) {
        clearInterval(this.intervalSelectChar);
        this.service.updateEnemyData(this.room, this.turn);
      } else {
        this.service.isSelectedCharacterEnemy(this.room, this.turn);
      }
    });
  }

  getCurrentCharacter() {
    let data;
    this.ownData$.subscribe(elem => {
      data = elem.characters.filter(filt => {
        return filt.tmpid == elem.currchar;
      });
    });
    return data[0];
  }
  selectAction(action) {
    this.service.selectAction(action, this.room, this.turn);
    this.intervalSelectAction = setInterval(() => { this.enemySelectedAction(); }, 3000);
  }
  enemySelectedAction() {

  }
}


