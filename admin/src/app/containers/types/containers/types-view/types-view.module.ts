import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypesViewRoutingModule } from './types-view-routing.module';
import { TypesViewComponent } from './types-view.component';
import { TypesModule } from '../../types.module';
import { TypesListComponent } from '../../components/types-list/types-list.component';


@NgModule({
  declarations: [TypesViewComponent, TypesListComponent],
  imports: [
    CommonModule,
    TypesViewRoutingModule
  ]
})
export class TypesViewModule { }
