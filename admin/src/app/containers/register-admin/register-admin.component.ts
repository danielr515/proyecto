import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppAction } from 'src/core/state/app.actions';

@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.component.html',
  styleUrls: ['./register-admin.component.scss']
})
export class RegisterAdminComponent implements OnInit {

  constructor(
    private router: Router,
    private action: AppAction,
  ) { }

  ngOnInit() {
    this.action.updateCurrentRoute(this.router.url);
  }

}
