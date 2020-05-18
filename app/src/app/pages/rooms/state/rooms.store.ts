
import { Injectable } from '@angular/core';
// import { } from './rooms.model';
import { Store, StoreConfig } from '@datorama/akita';



export interface RoomsState {
}

export function createInitialState() {
  return {
  };
}

@Injectable({
  providedIn: 'root'
})
@StoreConfig({ name: 'Rooms' })
export class RoomsStore extends Store<RoomsState> {
  constructor() {
    super(createInitialState());
  }
}
