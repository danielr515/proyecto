import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectTeamPageRoutingModule } from './select-team-routing.module';

import { SelectTeamPage } from './select-team.page';
import { SelectTeamListComponent } from './components/select-team-list/select-team-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectTeamPageRoutingModule
  ],
  declarations: [SelectTeamPage, SelectTeamListComponent]
})
export class SelectTeamPageModule { }
