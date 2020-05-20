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
  intervalStart;
  intervalSelectChar;
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
      } else {
        this.service.isGameStarted();
      }
    });
  }

  selectCharacter(character) {
    this.ownData$.pipe(take(1)).subscribe(elem => {
      this.service.selectCharacter(character, elem.roomid, elem.turn);
    });

    this.intervalSelectChar = setInterval(() => { this.enemySelectedCharacter(); }, 3000);
  }

  enemySelectedCharacter() {

  }
}


