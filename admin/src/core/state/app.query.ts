import { Injectable } from '@angular/core';
import { AppState, AppStore } from './app.store';
import { Query } from '@datorama/akita';

@Injectable({
  providedIn: 'root'
})
export class AppQuery extends Query<AppState> {
  constructor(protected store: AppStore) {
    super(store);
  }

  selectUser() {
    return this.select(state => state.user);
  }

  selectSessionToken() {
    return this.select(state => state.sessionToken);
  }

  selectCurrentRoute() {
    return this.select(state => state.currentRoute);
  }
}
