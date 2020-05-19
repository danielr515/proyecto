import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-select-team',
  templateUrl: './select-team.component.html',
  styleUrls: ['./select-team.component.scss'],
})
export class SelectTeamComponent implements OnInit {
  @Input() teams;
  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() { }

  async closeModal() {
    await this.modalCtrl.dismiss();
  }
}
