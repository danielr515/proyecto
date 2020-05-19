import { Component, OnInit } from '@angular/core';
import { TeamsService } from './state/teams.service';
import { TeamsQuery } from './state/teams.query';

@Component({
  selector: 'app-teams',
  templateUrl: 'teams.page.html',
  styleUrls: ['teams.page.scss']
})
export class TeamsPageComponent implements OnInit {
  teams$ = this.query.selectTeams();

  constructor(
    private service: TeamsService,
    private query: TeamsQuery
  ) { }

  ngOnInit() {
    this.service.updateTeams();
  }
}
