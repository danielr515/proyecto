import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersViewRoutingModule } from './characters-view-routing.module';
import { CharactersViewComponent } from './characters-view.component';


@NgModule({
  declarations: [CharactersViewComponent],
  imports: [
    CommonModule,
    CharactersViewRoutingModule
  ]
})
export class CharactersViewModule { }
