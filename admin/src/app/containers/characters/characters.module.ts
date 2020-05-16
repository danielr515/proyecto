import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './characters.component';
import { SharedModule } from 'src/shared/shared.module';
import { CharactersFormComponent } from './components/characters-form/characters-form.component';


@NgModule({
  declarations: [CharactersComponent],
  imports: [
    CommonModule,
    SharedModule,
    CharactersRoutingModule
  ]
})
export class CharactersModule { }
