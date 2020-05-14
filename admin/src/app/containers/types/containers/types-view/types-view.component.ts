import { Component, OnInit } from '@angular/core';
import { TypesQuery } from '../../state/types.query';
import { TypesService } from '../../state/types.service';

@Component({
  selector: 'app-types-view',
  templateUrl: './types-view.component.html',
  styleUrls: ['./types-view.component.scss']
})
export class TypesViewComponent implements OnInit {
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
      name: 'Añadir ventaja',
      url: '/types/addrelation',
      icon: 'fas fa-people-arrows'
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
