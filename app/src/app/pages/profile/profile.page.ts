import { Component } from '@angular/core';
import { AppService } from 'src/core/state/app.service';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePageComponent {

  constructor(
    private appService: AppService
  ) { }
  logout() {
    this.appService.logout();
  }
}
