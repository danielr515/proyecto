import { Injectable } from '@angular/core';
import { TeamsState, TeamsStore } from './teams.store';
import { Query } from '@datorama/akita';

@Injectable({
  providedIn: 'root'
})
export class TeamsQuery extends Query<TeamsState> {
  constructor(protected store: TeamsStore) {
    super(store);
  }
  selectTeams() {
    return this.select(state => state.teams);
  }

}
