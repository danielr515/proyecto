import { Component, OnInit } from '@angular/core';
import { TypesService } from 'src/app/containers/types/state/types.service';
import { CharactersService } from '../../state/characters.service';
import { CharactersQuery } from '../../state/Characters.query';
import { TypesQuery } from 'src/app/containers/types/state/types.query';
import { SkillsService } from 'src/app/containers/skills/state/skills.service';
import { SkillsQuery } from 'src/app/containers/skills/state/skills.query';

@Component({
  selector: 'app-characters-add',
  templateUrl: './characters-add.component.html',
  styleUrls: ['./characters-add.component.scss']
})
export class CharactersAddComponent implements OnInit {
  types$ = this.typesQuery.selectTypes();
  skills$ = this.skillsQuery.selectClassSkills();
  passives$ = this.skillsQuery.selectClassPassives();
  ultimates$ = this.skillsQuery.selectClassUltimates();

  constructor(
    private service: CharactersService,
    private query: CharactersQuery,
    private typesService: TypesService,
    private typesQuery: TypesQuery,
    private skillsService: SkillsService,
    private skillsQuery: SkillsQuery
  ) { }

  ngOnInit() {
    this.typesService.updateAllFullTypes();
    this.skillsService.updateAllSkillsByClass();
  }
  addCharacter(character) {
    this.service.addCharacter(character);
  }
}
