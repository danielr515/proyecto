import { Injectable } from '@angular/core';
import { TypesStore } from './types.store';
import { action } from '@datorama/akita';
import { FullType } from './types.model';

@Injectable({
  providedIn: 'root'
})
export class TypesAction {
  constructor(protected store: TypesStore) { }

  @action('updateUser')
  updateTypes(types: FullType[]) {
    this.store.update({
      types
    });
  }

}
