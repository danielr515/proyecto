import { Injectable } from '@angular/core';
import { TeamsStore } from './teams.store';
import { action } from '@datorama/akita';
import { Team } from './teams.model';

@Injectable({
  providedIn: 'root'
})
export class TeamsAction {
  constructor(protected store: TeamsStore) { }


  @action('updateTeams')
  updateTeams(teams: Team[]) {
    this.store.update({
      teams
    });
  }

}
