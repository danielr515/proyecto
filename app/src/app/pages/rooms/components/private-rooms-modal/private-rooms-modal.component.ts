import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-private-rooms-modal',
  templateUrl: './private-rooms-modal.component.html',
  styleUrls: ['./private-rooms-modal.component.scss'],
})
export class PrivateRoomsModalComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  constructor(
    private modalCtrl: ModalController,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.form = this.formBuilder.group({
      passwd: ['', Validators.required]
    });
  }
  async closeModal() {
    await this.modalCtrl.dismiss();
  }

  async enterPasswd() {
    if (this.form.valid) {
      await this.modalCtrl.dismiss(this.form.value);
    }
  }
}
