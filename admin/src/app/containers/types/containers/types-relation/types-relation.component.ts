import { Component, OnInit } from '@angular/core';
import { TypesQuery } from '../../state/types.query';
import { TypesService } from '../../state/types.service';

@Component({
  selector: 'app-types-relation',
  templateUrl: './types-relation.component.html',
  styleUrls: ['./types-relation.component.scss']
})
export class TypesRelationComponent implements OnInit {
  types = this.query.selectTypes();
  constructor(
    private query: TypesQuery,
    private service: TypesService
  ) { }

  ngOnInit() {
    this.service.updateAllFullTypes();
  }
  editRelation(typesrelation) {
    this.service.editRelation(typesrelation);
  }
}
