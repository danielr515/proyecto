import { Component, OnInit } from '@angular/core';
import { TypesQuery } from '../../state/types.query';
import { TypesService } from '../../state/types.service';

@Component({
  selector: 'app-types-view',
  templateUrl: './types-view.component.html',
  styleUrls: ['./types-view.component.scss']
})
export class TypesViewComponent implements OnInit {
  types$ = this.query.selectTypes();
  constructor(
    private query: TypesQuery,
    private service: TypesService
  ) { }

  ngOnInit() {
    this.service.updateAllFullTypes();
  }
}
