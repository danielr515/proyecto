import { Component, OnInit } from '@angular/core';
import { RoomsService } from './state/rooms.service';
import { RoomsQuery } from './state/rooms.query';

@Component({
  selector: 'app-rooms',
  templateUrl: 'rooms.page.html',
  styleUrls: ['rooms.page.scss']
})
export class RoomsPageComponent implements OnInit {
  rooms$ = this.query.selectRooms();
  constructor(
    private service: RoomsService,
    private query: RoomsQuery
  ) { }

  ngOnInit() {
    this.service.updateWaitingRooms();
  }
}
