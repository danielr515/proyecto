import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/core/state/app.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppAction } from 'src/core/state/app.actions';
import { AppQuery } from 'src/core/state/app.query';

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
    private router: Router,
    private aroute: ActivatedRoute,
    private action: AppAction,
    private query: AppQuery
  ) { }

  ngOnInit() {
    this.aroute.queryParams.subscribe(params => {
      if (params.lastPage) {
        this.lastPage = params.lastPage;
      }
    });
    this.initForm();
    this.action.updateCurrentRoute(this.router.url);
    this.sessionToken.subscribe(token => {
      if (token !== '') {
        if (this.lastPage) {
          this.router.navigate([this.lastPage]);
        } else {
          this.router.navigate(['/register']);
        }

      }
    });
  }

  initForm() {
    this.form = this.formBuilder.group({
      uname: ['', Validators.required],
      passwd: ['', Validators.required]
    });
  }

  login() {
    if (this.form.valid) {
      this.service.updateUser(this.form.value);
      this.service.login(this.form.value);
    }

  }
}
