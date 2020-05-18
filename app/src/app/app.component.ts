import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppService } from 'src/core/state/app.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private service: AppService
  ) {
    this.initializeApp();
    this.loadTokenAndUser();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  loadTokenAndUser() {
    const token = sessionStorage.getItem('rpg-auth-sessiontoken');
    const user = JSON.parse(localStorage.getItem('rpg-auth-user'));
    console.log(token);
    if (token != null) {
      this.service.updateSessionToken(token);
    }
    if (user.length > 0) {
      this.service.updateUser(user);
    }
  }
}
