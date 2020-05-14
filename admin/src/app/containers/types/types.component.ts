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
      url: '/types'
    },
    {
      name: 'Añadir tipos',
      url: '/types/addtype'
    },
    {
      name: 'Añadir ventaja',
      url: '/types/addrelation'
    }
  ];
  types = this.query.selectTypes();
  constructor(
    private query: TypesQuery,
    private service: TypesService
  ) { }

  ngOnInit() {
    this.service.updateAllFullTypes();
  }

}
