
import { Injectable } from '@angular/core';
import { FullType } from './types.model';
import { Store, StoreConfig } from '@datorama/akita';



export interface TypesState {
  types: FullType[];
}

export function createInitialState() {
  return {
    types: []
  };
}

@Injectable({
  providedIn: 'root'
})
@StoreConfig({ name: 'Types' })
export class TypesStore extends Store<TypesState> {
  constructor() {
    super(createInitialState());
  }
}
