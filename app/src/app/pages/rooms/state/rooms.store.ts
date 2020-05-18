
import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { Room } from './rooms.model';



export interface RoomsState {
  rooms: Room[];
}

export function createInitialState() {
  return {
    rooms: []
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
