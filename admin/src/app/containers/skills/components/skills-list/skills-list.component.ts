import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.scss']
})
export class SkillsListComponent implements OnInit {
  @Input() skills;
  constructor() { }

  ngOnInit() {
  }

}
