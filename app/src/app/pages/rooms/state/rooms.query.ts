import { Injectable } from '@angular/core';
import { RoomsState, RoomsStore } from './rooms.store';
import { Query } from '@datorama/akita';

@Injectable({
  providedIn: 'root'
})
export class RoomsQuery extends Query<RoomsState> {
  constructor(protected store: RoomsStore) {
    super(store);
  }


}
