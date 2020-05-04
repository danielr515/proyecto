import { Component } from '@angular/core';
import { AppAction } from 'src/core/state/app.actions';
import { AppQuery } from 'src/core/state/app.query';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AppService } from 'src/core/state/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentRoute$ = this.query.selectCurrentRoute();
  constructor(
    private query: AppQuery,
    private router: Router,
    private service: AppService
  ) { }

  onLogOut() {
    this.service.logout();
  }
}
