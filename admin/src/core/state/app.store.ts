
import { Injectable } from '@angular/core';
import { User } from './app.model';
import { Store, StoreConfig } from '@datorama/akita';



export interface AppState {
  user: User;
  sessionToken: string;
}

export function createInitialState() {
  return {
    user: {
      uname: '',
      passwd: ''
    },
    sessionToken: ''
  };
}

@Injectable({
  providedIn: 'root'
})
@StoreConfig({ name: 'app' })
export class AppStore extends Store<AppState> {
  constructor() {
    super(createInitialState());
  }
}
