import { Component, OnInit } from '@angular/core';
import { RoomsService } from './state/rooms.service';
import { RoomsQuery } from './state/rooms.query';
import { ModalController } from '@ionic/angular';
import { PrivateRoomsModalComponent } from './components/private-rooms-modal/private-rooms-modal.component';

@Component({
  selector: 'app-rooms',
  templateUrl: 'rooms.page.html',
  styleUrls: ['rooms.page.scss']
})
export class RoomsPageComponent implements OnInit {
  rooms$ = this.query.selectRooms();
  filter = '';
  constructor(
    private service: RoomsService,
    private query: RoomsQuery,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.service.updateWaitingRooms();
  }

  enterPublic(id) {
    this.service.enterRoom(id);
    console.log('llamo al servicio para entrar en la sala publica');
  }
  async openPrivateModal(id) {
    const modal = await this.modalCtrl.create({
      component: PrivateRoomsModalComponent
    });
    await modal.present();
    modal.onDidDismiss().then(res => {
      if (res.data !== undefined) {
        this.enterPrivate(id, res.data.passwd);
      }
    });
  }

  enterPrivate(id, passwd) {
    this.service.enterRoom(id, passwd);
    console.log('llamo al servicio para entrar en la sala privada');
  }
}
