import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppAction } from 'src/core/state/app.actions';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppService } from 'src/core/state/app.service';
import { AppQuery } from 'src/core/state/app.query';

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
    if (this.form.valid) {
      this.service.register(this.form.value);
    }

  }
}
