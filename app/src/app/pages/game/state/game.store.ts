
import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
// import { GameTeam } from './game.model';



export interface GameState {
  ownData: any;
  enemyData: any;
  gameStarted: boolean;
  selectedCharacterEnemy: boolean;
  selectedActionEnemy: boolean;
}

export function createInitialState() {
  return {
    ownData: {},
    enemyData: {},
    gameStarted: false,
    selectedCharacterEnemy: false,
    selectedActionEnemy: true
  };
}

@Injectable({
  providedIn: 'root'
})
@StoreConfig({ name: 'Game' })
export class GameStore extends Store<GameState> {
  constructor() {
    super(createInitialState());
  }
}
