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
  constructor(
    private service: GameService,
    private query: GameQuery
  ) { }

  ngOnInit() {
    this.service.updateOwnData();
    this.service.updateEnemyData();

  }
}
