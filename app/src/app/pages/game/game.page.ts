import { Component, OnInit } from '@angular/core';
import { GameService } from './state/game.service';
import { GameQuery } from './state/game.query';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {
  team$ = this.query.selectOwnData();
  enemyTeam$ = this.query.selectEnemyData();
  gameStarted = this.query.selectGameStarted();
  interval1;
  constructor(
    private service: GameService,
    private query: GameQuery
  ) { }

  ngOnInit() {
    this.interval1 = setInterval(this.isGameStarted, 3000);
    this.service.updateOwnData();
    this.service.updateEnemyData();

  }

  async  isGameStarted() {
    if (await this.gameStarted) {
      clearInterval(this.interval1);
    } else {
      this.service.isGameStarted();
    }
  }
}
