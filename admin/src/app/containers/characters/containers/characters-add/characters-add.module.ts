import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersAddRoutingModule } from './characters-add-routing.module';
import { CharactersAddComponent } from './characters-add.component';


@NgModule({
  declarations: [CharactersAddComponent],
  imports: [
    CommonModule,
    CharactersAddRoutingModule
  ]
})
export class CharactersAddModule { }
