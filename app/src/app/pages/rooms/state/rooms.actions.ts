import { Injectable } from '@angular/core';
import { RoomsStore } from './rooms.store';
import { action } from '@datorama/akita';
import { Room } from './rooms.model';

@Injectable({
  providedIn: 'root'
})
export class RoomsAction {
  constructor(protected store: RoomsStore) { }


  @action('updateWaitingRooms')
  updateWaitingRooms(rooms: Room[]) {
    this.store.update({
      rooms
    });
  }

}
