import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersViewRoutingModule } from './characters-view-routing.module';
import { CharactersViewComponent } from './characters-view.component';
import { CharactersListComponent } from '../../components/characters-list/characters-list.component';


@NgModule({
  declarations: [
    CharactersViewComponent,
    CharactersListComponent
  ],
  imports: [
    CommonModule,
    CharactersViewRoutingModule
  ]
})
export class CharactersViewModule { }
