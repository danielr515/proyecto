import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../state/characters.service';
import { CharactersQuery } from '../../state/Characters.query';

@Component({
  selector: 'app-characters-view',
  templateUrl: './characters-view.component.html',
  styleUrls: ['./characters-view.component.scss']
})
export class CharactersViewComponent implements OnInit {
  characters$ = this.query.selectCharacters();
  constructor(
    private service: CharactersService,
    private query: CharactersQuery
  ) { }

  ngOnInit() {
    this.service.updateAllCharacters();
  }

}
