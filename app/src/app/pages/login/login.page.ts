import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppService } from 'src/core/state/app.service';
import { AppQuery } from 'src/core/state/app.query';
import { Md5 } from 'ts-md5/dist/md5';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form: FormGroup = new FormGroup({});
  sessionToken = this.query.selectSessionToken();
  user = null;
  constructor(
    private service: AppService,
    private formBuilder: FormBuilder,
    private query: AppQuery
  ) { }

  ngOnInit() {
    this.initForm();
    this.user = JSON.parse(localStorage.getItem('rpg-auth-user'));
    if (this.user !== null) {
      this.service.login(this.user);
    }
  }

  initForm() {
    this.form = this.formBuilder.group({
      uname: ['', Validators.required],
      passwd: ['', Validators.required]
    });
  }

  login() {
    if (this.form.valid) {
      const md5 = new Md5();
      const data = this.form.value;
      data.passwd = md5.appendStr(data.passwd).end();
      this.service.login(data);
      this.initForm();
    }
  }
}


