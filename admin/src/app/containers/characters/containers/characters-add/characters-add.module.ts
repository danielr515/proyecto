import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersAddRoutingModule } from './characters-add-routing.module';
import { CharactersAddComponent } from './characters-add.component';
import { CharactersFormComponent } from '../../components/characters-form/characters-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/shared/shared.module';


@NgModule({
  declarations: [CharactersAddComponent, CharactersFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    CharactersAddRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CharactersAddModule { }
