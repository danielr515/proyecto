import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent implements OnInit {
  @Input() characters;
  constructor() { }

  ngOnInit() {
  }

}
