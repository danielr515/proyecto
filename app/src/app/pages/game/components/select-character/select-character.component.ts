import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select-character',
  templateUrl: './select-character.component.html',
  styleUrls: ['./select-character.component.scss'],
})
export class SelectCharacterComponent implements OnInit {
  @Input() team;
  @Output() selectCharacter: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() { }

  onSelectCharacter(character) {
    this.selectCharacter.emit(character.id);
  }
}
