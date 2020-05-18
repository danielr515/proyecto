import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppService } from 'src/core/state/app.service';
import { AppQuery } from 'src/core/state/app.query';
import { Md5 } from 'ts-md5';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.page.html',
  styleUrls: ['./create-room.page.scss'],
})
export class CreateRoomPageComponent implements OnInit {
  form: FormGroup = new FormGroup({});

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
      name: ['', Validators.required],
      passwd: [''],
      type: ['PUBLIC', Validators.required],
    });
  }

  createRoom() {
    if (this.form.valid) {
      if (this.form.value.type === 'PRIVATE' && this.form.value.passwd !== '') {
        console.log('valid');
      } else if (this.form.value.type === 'PUBLIC') {
        console.log('valid');
        this.form.patchValue({ passwd: '' });
      }
    }
    console.log(this.form.value);
  }
}
