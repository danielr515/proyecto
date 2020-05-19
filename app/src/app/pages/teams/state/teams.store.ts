
import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { Team } from './teams.model';



export interface TeamsState {
  teams: Team[];
}

export function createInitialState() {
  return {
    teams: []
  };
}

@Injectable({
  providedIn: 'root'
})
@StoreConfig({ name: 'Teams' })
export class TeamsStore extends Store<TeamsState> {
  constructor() {
    super(createInitialState());
  }
}
