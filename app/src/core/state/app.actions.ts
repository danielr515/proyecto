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
    localStorage.setItem('rpg-auth-user', JSON.stringify(user));
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
    sessionStorage.removeItem('rpg-auth-sessiontoken');
    localStorage.removeItem('rpg-auth-user');
    this.store.update({
      sessionToken: '',
      user: { uname: '', passwd: '' }
    });
  }

  @action('updateCurrentRoute')
  updateCurrentRoute(currentRoute: string) {
    this.store.update({
      currentRoute
    });
  }
}
