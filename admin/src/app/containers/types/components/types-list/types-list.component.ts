import { Component, OnInit, Input } from '@angular/core';
import { FullType } from '../../state/types.model';

@Component({
  selector: 'app-types-list',
  templateUrl: './types-list.component.html',
  styleUrls: ['./types-list.component.scss']
})
export class TypesListComponent implements OnInit {
  @Input() types: FullType[];
  constructor() { }

  ngOnInit() {
  }

}
