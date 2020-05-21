import { Injectable } from '@angular/core';
import { GameState, GameStore } from './game.store';
import { Query } from '@datorama/akita';

@Injectable({
  providedIn: 'root'
})
export class GameQuery extends Query<GameState> {
  constructor(protected store: GameStore) {
    super(store);
  }
  selectOwnData() {
    return this.select(state => state.ownData);
  }

  selectEnemyData() {
    return this.select(state => state.enemyData);
  }

  selectGameStarted() {
    return this.select(state => state.gameStarted);
  }

  selectSelectedCharacterEnemy() {
    return this.select(state => state.selectedCharacterEnemy);
  }

  selectSelectedActionEnemy() {
    return this.select(state => state.selectedActionEnemy);
  }
}
