import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/core/state/app.service';
import { User } from 'src/core/state/app.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  uname = '';
  passwd = '';
  constructor(
    private service: AppService
  ) { }

  ngOnInit() {
  }

  login() {
    let user: User = { uname: this.uname, passwd: this.passwd };
    this.service.updateUser(user);
    this.service.login(user);
  }
}
