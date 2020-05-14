import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypesAddRoutingModule } from './types-add-routing.module';
import { TypesAddComponent } from './types-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [TypesAddComponent],
  imports: [
    CommonModule,
    TypesAddRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TypesAddModule { }
