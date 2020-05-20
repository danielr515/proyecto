import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-select-character',
  templateUrl: './select-character.component.html',
  styleUrls: ['./select-character.component.scss'],
})
export class SelectCharacterComponent implements OnInit {
  @Input() team;
  constructor() { }

  ngOnInit() { }

}
