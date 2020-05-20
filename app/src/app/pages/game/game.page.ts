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
  interval1;
  constructor(
    private service: GameService,
    private query: GameQuery
  ) { }

  ngOnInit() {
    this.service.isGameStarted();
    this.interval1 = setInterval(() => { this.isGameStarted(); }, 3000);
  }

  isGameStarted() {
    this.gameStarted$.pipe(take(1)).subscribe(elem => {
      if (elem) {
        console.log('is game started');
        clearInterval(this.interval1);
        this.service.updateOwnData();
      }
    });
  }
}
