import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypesRoutingModule } from './types-routing.module';
import { TypesComponent } from './types.component';
import { TypesListComponent } from './components/types-list/types-list.component';
import { SharedModule } from 'src/shared/shared.module';


@NgModule({
  declarations: [TypesComponent, TypesListComponent],
  imports: [
    CommonModule,
    SharedModule,
    TypesRoutingModule
  ]
})
export class TypesModule { }
