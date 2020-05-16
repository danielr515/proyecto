import { Component, OnInit } from '@angular/core';
import { TypesService } from 'src/app/containers/types/state/types.service';
import { CharactersService } from '../../state/characters.service';
import { CharactersQuery } from '../../state/Characters.query';
import { TypesQuery } from 'src/app/containers/types/state/types.query';

@Component({
  selector: 'app-characters-add',
  templateUrl: './characters-add.component.html',
  styleUrls: ['./characters-add.component.scss']
})
export class CharactersAddComponent implements OnInit {
  types$ = this.typesQuery.selectTypes();

  constructor(
    private service: CharactersService,
    private query: CharactersQuery,
    private typesService: TypesService,
    private typesQuery: TypesQuery
  ) { }

  ngOnInit() {
    this.typesService.updateAllFullTypes();
  }
  addCharacter(character) {
    this.service.addCharacter(character);
  }
}
