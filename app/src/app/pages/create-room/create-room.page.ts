import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RoomsService } from '../rooms/state/rooms.service';
import { RoomsQuery } from '../rooms/state/rooms.query';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.page.html',
  styleUrls: ['./create-room.page.scss'],
})
export class CreateRoomPageComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  constructor(
    private service: RoomsService,
    private formBuilder: FormBuilder,
    private query: RoomsQuery
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
        this.service.createRoom(this.form.value);
      } else if (this.form.value.type === 'PUBLIC') {
        this.form.patchValue({ passwd: '' });
        this.service.createRoom(this.form.value);
      }
    }
    console.log(this.form.value);
  }
}
