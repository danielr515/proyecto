import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  tabs = [
    {
      name: 'Lista de habilidades',
      url: '/skills',
      icon: 'fas fa-list-ul'
    },
    {
      name: 'Añadir habilidades',
      url: '/skills/add',
      icon: 'fas fa-plus'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
