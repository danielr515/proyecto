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
    sessionStorage.setItem('rpg-auth-uname', user.uname);
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
    sessionStorage.removeItem('rpg-auth-uname');
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
