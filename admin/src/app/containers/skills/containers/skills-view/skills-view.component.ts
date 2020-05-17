import { Component, OnInit } from '@angular/core';
import { SkillsQuery } from '../../state/skills.query';
import { SkillsService } from '../../state/skills.service';

@Component({
  selector: 'app-skills-view',
  templateUrl: './skills-view.component.html',
  styleUrls: ['./skills-view.component.scss']
})
export class SkillsViewComponent implements OnInit {
  skills$ = this.query.selectSkills();
  constructor(
    private query: SkillsQuery,
    private service: SkillsService
  ) { }

  ngOnInit() {
    this.service.updateAllSkills();
  }

}
