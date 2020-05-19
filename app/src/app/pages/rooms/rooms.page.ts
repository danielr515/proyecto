import { Component, OnInit } from '@angular/core';
import { RoomsService } from './state/rooms.service';
import { RoomsQuery } from './state/rooms.query';
import { ModalController } from '@ionic/angular';
import { PrivateRoomsModalComponent } from './components/private-rooms-modal/private-rooms-modal.component';
import { SelectTeamComponent } from './components/select-team/select-team.component';
import { TeamsService } from '../teams/state/teams.service';
import { TeamsQuery } from '../teams/state/teams.query';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-rooms',
  templateUrl: 'rooms.page.html',
  styleUrls: ['rooms.page.scss']
})
export class RoomsPageComponent implements OnInit {
  rooms$ = this.query.selectRooms();
  teams$ = this.teamsQuery.selectTeams();
  filter = '';
  constructor(
    private service: RoomsService,
    private query: RoomsQuery,
    private teamsService: TeamsService,
    private teamsQuery: TeamsQuery,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.service.updateWaitingRooms();
    this.teamsService.updateTeams();
  }

  enterPublic(id) {
    this.service.enterRoom(id);
    this.openSelectTeamModal();
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

  async openSelectTeamModal() {
    const modal = await this.modalCtrl.create({
      component: SelectTeamComponent,
      componentProps: {
        teams: this.getTeams()
      }
    });
    await modal.present();
    modal.onDidDismiss().then(res => {
      if (res.data !== undefined) {

      }
    });
  }


  getTeams() {
    let teams;
    this.teams$.subscribe(elem => {
      teams = elem;
    });
    return teams;
  }
}
