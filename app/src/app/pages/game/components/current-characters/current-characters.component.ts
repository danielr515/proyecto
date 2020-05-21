import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-current-characters',
  templateUrl: './current-characters.component.html',
  styleUrls: ['./current-characters.component.scss'],
})
export class CurrentCharactersComponent implements OnInit {
  @Input() ownData;
  @Input() ownCurrChar;
  @Input() enemyData;
  constructor() { }

  ngOnInit() { }

}
