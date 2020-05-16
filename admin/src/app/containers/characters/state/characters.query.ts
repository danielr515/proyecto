import { Injectable } from '@angular/core';
import { CharactersState, CharactersStore } from './characters.store';
import { Query } from '@datorama/akita';

@Injectable({
  providedIn: 'root'
})
export class CharactersQuery extends Query<CharactersState> {
  constructor(protected store: CharactersStore) {
    super(store);
  }

  selectCharacters() {
    return this.select(state => state.characters);
  }
}
