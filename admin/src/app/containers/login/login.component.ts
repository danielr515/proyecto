import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/core/state/app.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppQuery } from 'src/core/state/app.query';
import { Md5 } from 'ts-md5/dist/md5';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  sessionToken = this.query.selectSessionToken();
  lastPage = '';
  constructor(
    private service: AppService,
    private formBuilder: FormBuilder,
    private query: AppQuery
  ) { }

  ngOnInit() {
    this.initForm();
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
      // data.passwd = md5.appendStr(data.passwd).end();
      this.service.updateUser(this.form.value);
      console.log(this.form.value);
      this.service.login(this.form.value);
    }
  }
}
