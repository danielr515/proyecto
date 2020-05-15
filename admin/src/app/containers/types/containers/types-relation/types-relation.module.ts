import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypesRelationRoutingModule } from './types-relation-routing.module';
import { TypesRelationComponent } from './types-relation.component';
import { TypesRelationFormComponent } from '../../components/types-relation-form/types-relation-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [TypesRelationComponent, TypesRelationFormComponent],
  imports: [
    CommonModule,
    TypesRelationRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TypesRelationModule { }
