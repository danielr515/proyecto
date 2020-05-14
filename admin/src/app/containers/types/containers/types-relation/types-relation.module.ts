import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypesRelationRoutingModule } from './types-relation-routing.module';
import { TypesRelationComponent } from './types-relation.component';


@NgModule({
  declarations: [TypesRelationComponent],
  imports: [
    CommonModule,
    TypesRelationRoutingModule
  ]
})
export class TypesRelationModule { }
