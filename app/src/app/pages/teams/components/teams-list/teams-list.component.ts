import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.scss'],
})
export class TeamsListComponent implements OnInit {
  @Input() teams;
  constructor() { }

  ngOnInit() { }

}
