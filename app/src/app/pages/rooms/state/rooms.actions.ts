import { Injectable } from '@angular/core';
import { RoomsStore } from './rooms.store';
import { action } from '@datorama/akita';
// import { FullType } from './rooms.model';

@Injectable({
  providedIn: 'root'
})
export class RoomsAction {
  constructor(protected store: RoomsStore) { }



}
