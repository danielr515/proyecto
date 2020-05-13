import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypesRoutingModule } from './types-routing.module';
import { TypesComponent } from './types.component';
import { TypesListComponent } from './components/types-list/types-list.component';


@NgModule({
  declarations: [TypesComponent, TypesListComponent],
  imports: [
    CommonModule,
    TypesRoutingModule
  ]
})
export class TypesModule { }
