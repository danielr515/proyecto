import { Component, OnInit } from '@angular/core';
import { TypesQuery } from './state/types.query';
import { TypesService } from './state/types.service';


@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.scss']
})

export class TypesComponent implements OnInit {
  tabs = [
    {
      name: 'Lista de tipos',
      url: '/types',
      icon: 'fas fa-list-ul'
    },
    {
      name: 'Añadir tipos',
      url: '/types/addtype',
      icon: 'fas fa-plus'
    },
    {
      name: 'Modificar relación',
      url: '/types/addrelation',
      icon: 'fas fa-people-arrows'
    }
  ];
  constructor(
    private query: TypesQuery,
    private service: TypesService
  ) { }

  ngOnInit() {
  }

}
