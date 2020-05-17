import { Component, OnInit } from '@angular/core';
import { TypesQuery } from 'src/app/containers/types/state/types.query';
import { TypesService } from 'src/app/containers/types/state/types.service';
import { SkillsService } from '../../state/skills.service';

@Component({
  selector: 'app-skills-add',
  templateUrl: './skills-add.component.html',
  styleUrls: ['./skills-add.component.scss']
})
export class SkillsAddComponent implements OnInit {
  types$ = this.typesQuery.selectTypes();
  constructor(
    private service: SkillsService,
    private typesQuery: TypesQuery,
    private typesService: TypesService

  ) { }

  ngOnInit() {
    this.typesService.updateAllFullTypes();
  }

  addSkill(skill) {
    this.service.addSkill(skill);
  }
}
