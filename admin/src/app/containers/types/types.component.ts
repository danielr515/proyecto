import { Component, OnInit } from '@angular/core';
import { TypesQuery } from './state/types.query';
import { TypesService } from './state/types.service';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.scss']
})
export class TypesComponent implements OnInit {

  constructor(
    private query: TypesQuery,
    private service: TypesService
  ) { }

  ngOnInit() {
    console.log('aaaaaaaaa');
    this.service.updateAllFullTypes();
  }

}
