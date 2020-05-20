
import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { GameTeam } from './game.model';



export interface GameState {
  ownData: any;
  enemyData: any;
}

export function createInitialState() {
  return {
    ownData: {},
    enemyData: {}
  };
}

@Injectable({
  providedIn: 'root'
})
@StoreConfig({ name: 'Rooms' })
export class GameStore extends Store<GameState> {
  constructor() {
    super(createInitialState());
  }
}
