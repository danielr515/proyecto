import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select-team-list',
  templateUrl: './select-team-list.component.html',
  styleUrls: ['./select-team-list.component.scss'],
})
export class SelectTeamListComponent implements OnInit {
  @Input() teams;
  @Output() teamSelected: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() { }
  selectTeam(team) {
    this.teamSelected.emit(team);
  }
}
