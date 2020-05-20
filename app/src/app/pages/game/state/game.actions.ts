import { Injectable } from '@angular/core';
import { GameStore } from './game.store';
import { action } from '@datorama/akita';
import { GameTeam } from './game.model';

@Injectable({
  providedIn: 'root'
})
export class GameAction {
  constructor(protected store: GameStore) { }


  @action('updateTeam')
  updateOwnData(ownData: GameTeam) {
    this.store.update({
      ownData
    });
  }
  @action('updateEnemyData')
  updateEnemyData(enemyData: GameTeam) {
    this.store.update({
      enemyData
    });
  }

  @action('updateGameStarted')
  updateGameStarted(gameStarted: boolean) {
    this.store.update({
      gameStarted
    });
  }
}
