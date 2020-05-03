import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/core/state/app.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  uname = '';
  passwd = '';
  constructor(
    private service: AppService,
    private formBuilder: FormBuilder
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
      console.log(this.form.value);
      this.service.updateUser(this.form.value);
      this.service.login(this.form.value);
    }

  }
}
