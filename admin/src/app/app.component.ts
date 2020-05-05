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
  constructor(
    private query: AppQuery,
    public router: Router,
    private aroute: ActivatedRoute,
    private service: AppService,
    private action: AppAction
  ) {

    if (sessionStorage.getItem('rpg-auth-sessiontoken') && sessionStorage.getItem('rpg-auth-uname')) {
      this.action.updateSessionToken(sessionStorage.getItem('rpg-auth-sessiontoken'));
      this.action.updateUser({ uname: sessionStorage.getItem('rpg-auth-uname'), passwd: '' });
    }
    // console.log(this.router.url);
    this.aroute.params.subscribe(elem => {
      console.log('string elem____________');

      console.log(elem);
    });
  }
  ngOnInit() {
    console.log(this.router.url);
  }

  onLogOut() {
    this.service.logout();
  }
}
