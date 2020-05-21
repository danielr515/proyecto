import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GamePageRoutingModule } from './game-routing.module';

import { GamePage } from './game.page';
import { SelectCharacterComponent } from './components/select-character/select-character.component';
import { CurrentCharactersComponent } from './components/current-characters/current-characters.component';
import { SkillsComponent } from './components/skills/skills.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GamePageRoutingModule
  ],
  declarations: [GamePage, SelectCharacterComponent, CurrentCharactersComponent, SkillsComponent]
})
export class GamePageModule { }
