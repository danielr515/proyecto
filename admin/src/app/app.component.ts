import { Component, OnInit } from '@angular/core';
import { AppAction } from 'src/core/state/app.actions';
import { AppQuery } from 'src/core/state/app.query';
import { map } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from 'src/core/state/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  currentRoute$ = this.query.selectCurrentRoute();
  sessionToken = this.query.selectSessionToken();
  lastPage = '';
  constructor(
    private query: AppQuery,
    public router: Router,
    private service: AppService,
    private aroute: ActivatedRoute,
    private action: AppAction
  ) {

    if (sessionStorage.getItem('rpg-auth-sessiontoken') && sessionStorage.getItem('rpg-auth-uname')) {
      this.action.updateSessionToken(sessionStorage.getItem('rpg-auth-sessiontoken'));
      this.action.updateUser({ uname: sessionStorage.getItem('rpg-auth-uname'), passwd: '' });
    }
  }
  ngOnInit() {
    this.aroute.queryParams.subscribe(params => {
      if (params.lastPage) {
        this.lastPage = params.lastPage;
      }
    });

    console.log(this.router.url);

    this.sessionToken.subscribe(token => {
      if (token !== '') {
        if (this.lastPage) {
          this.router.navigate([this.lastPage]);
        } else {
          this.router.navigate(['/index']);
        }
      } else {
        this.router.navigate(['/login']);
      }
    });
  }

  onLogOut() {
    this.service.logout();
  }
}
