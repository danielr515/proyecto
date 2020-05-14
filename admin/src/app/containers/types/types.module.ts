import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypesRoutingModule } from './types-routing.module';
import { TypesComponent } from './types.component';
import { SharedModule } from 'src/shared/shared.module';


@NgModule({
  declarations: [TypesComponent],
  imports: [
    CommonModule,
    SharedModule,
    TypesRoutingModule
  ]
})
export class TypesModule { }
