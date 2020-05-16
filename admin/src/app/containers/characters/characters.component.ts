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
      url: '/characters/addcharacter',
      icon: 'fas fa-plus'
    },
    {
      name: 'Lista de habilidades',
      url: '/characters/viewskills',
      icon: 'fas fa-people-arrows'
    },
    {
      name: 'Añadir habilidades',
      url: '/characters/addskill',
      icon: 'fas fa-people-arrows'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
