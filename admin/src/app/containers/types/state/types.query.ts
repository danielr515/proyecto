import { Injectable } from '@angular/core';
import { TypesState, TypesStore } from './types.store';
import { Query } from '@datorama/akita';

@Injectable({
  providedIn: 'root'
})
export class TypesQuery extends Query<TypesState> {
  constructor(protected store: TypesStore) {
    super(store);
  }

  selectTypes() {
    return this.select(state => state.types);
  }
}
