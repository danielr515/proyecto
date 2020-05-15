import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppAction } from 'src/core/state/app.actions';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppService } from 'src/core/state/app.service';
import { AppQuery } from 'src/core/state/app.query';
import { Md5 } from 'ts-md5/dist/md5';

@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.component.html',
  styleUrls: ['./register-admin.component.scss']
})
export class RegisterAdminComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  sessionToken = this.query.selectSessionToken();
  lastPage = '';
  constructor(
    private service: AppService,
    private formBuilder: FormBuilder,
    private router: Router,
    private action: AppAction,
    private query: AppQuery
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this.formBuilder.group({
      uname: ['', Validators.required],
      passwd: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  register() {


    const md5 = new Md5();

    console.log(md5.appendStr('hello').end());
    if (this.form.valid) {
      const data = this.form.value;
      data.passwd = md5.appendStr(data.passwd).end();
      console.log(data);
      this.service.register(data);
    }

  }
}
