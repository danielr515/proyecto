import { Injectable } from '@angular/core';
import { AppStore } from './app.store';
import { action } from '@datorama/akita';
import { User } from './app.model';

@Injectable({
  providedIn: 'root'
})
export class AppAction {
  constructor(protected store: AppStore) { }

  @action('updateUser')
  updateUser(user: User) {
    this.store.update({
      user
    });
  }

  @action('updateSessionToken')
  updateSessionToken(sessionToken: string) {
    sessionStorage.setItem('rpg-auth-sessiontoken', sessionToken);
    this.store.update({
      sessionToken
    });
  }
  @action('deleteSessionToken')
  deleteSessionToken() {
    sessionStorage.deleteItem('rpg-auth-sessiontoken');
    this.store.update({
      sessionToken: ''
    });
  }

  @action('updateCurrentRoute')
  updateCurrentRoute(currentRoute: string) {
    console.log(currentRoute);
    this.store.update({
      currentRoute
    });
  }
}
