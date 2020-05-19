import { Component, OnInit, Input, EventEmitter, Output, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
})
export class RoomsListComponent implements OnInit, OnChanges {
  @Input() rooms;
  @Input() filter: string;
  @Output() enterPublic: EventEmitter<any> = new EventEmitter<any>();
  @Output() enterPrivate: EventEmitter<any> = new EventEmitter<any>();
  roomsF = [];
  constructor() { }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.rooms) {
      this.roomsF = this.rooms;
    }
    if (changes.filter) {
      this.filterRooms();
    }
  }
  filterRooms() {
    if (this.filter !== '') {
      this.roomsF = this.rooms.filter(room => {
        return room.name.toUpperCase().includes(this.filter.toUpperCase()) || room.player1.toUpperCase().includes(this.filter.toUpperCase());
      });
    } else {
      this.roomsF = this.rooms;
    }
  }
  enterRoom(room) {
    switch (room.type) {
      case 'PUBLIC':
        this.enterPublic.emit(room.id);
        break;
      case 'PRIVATE':
        this.enterPrivate.emit(room.id);
        break;
    }
  }
}
