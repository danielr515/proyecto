import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/core/state/app.service';
import { User } from 'src/core/state/app.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  uname = '';
  passwd = '';
  return: string = '';
  constructor(
    private service: AppService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => console.log(params));
    this.initForm();
  }

  initForm() {
    this.form = this.formBuilder.group({
      uname: ['', Validators.required],
      passwd: ['', Validators.required]
    });
  }

  login() {
    console.log(this.return);
    if (this.form.valid) {
      // console.log(this.form.value);
      this.service.updateUser(this.form.value);
      this.service.login(this.form.value);
    }

  }
}
