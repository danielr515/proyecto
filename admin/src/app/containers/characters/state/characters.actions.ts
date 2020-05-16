import { Injectable } from '@angular/core';
import { CharactersStore } from './characters.store';
import { action } from '@datorama/akita';
import { Character } from './characters.model';

@Injectable({
  providedIn: 'root'
})
export class CharactersAction {
  constructor(protected store: CharactersStore) { }

  @action('updateUser')
  updateCharacters(characters: Character[]) {
    this.store.update({
      characters
    });
  }

}
