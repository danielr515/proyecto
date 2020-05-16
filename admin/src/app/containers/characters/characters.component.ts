import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  tabs = [
    {
      name: 'Lista de personajes',
      url: '/characters',
      icon: 'fas fa-list-ul'
    },
    {
      name: 'Añadir personajes',
      url: '/characters/add',
      icon: 'fas fa-plus'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
