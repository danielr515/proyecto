import { Component, OnInit } from '@angular/core';
import { TeamsQuery } from '../teams/state/teams.query';
import { TeamsService } from '../teams/state/teams.service';

@Component({
  selector: 'app-select-team',
  templateUrl: './select-team.page.html',
  styleUrls: ['./select-team.page.scss'],
})
export class SelectTeamPage implements OnInit {
  teams$ = this.query.selectTeams();
  constructor(
    private query: TeamsQuery,
    private service: TeamsService
  ) { }

  ngOnInit() {
    this.service.updateTeams();
  }

  selectTeam(team) {
    this.service.setTeam(team);
  }
}
