
import { Injectable } from '@angular/core';
import { Character } from './characters.model';
import { Store, StoreConfig } from '@datorama/akita';



export interface CharactersState {
  characters: Character[];
}

export function createInitialState() {
  return {
    characters: []
  };
}

@Injectable({
  providedIn: 'root'
})
@StoreConfig({ name: 'Characters' })
export class CharactersStore extends Store<CharactersState> {
  constructor() {
    super(createInitialState());
  }
}
