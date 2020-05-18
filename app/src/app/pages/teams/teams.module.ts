import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TeamsPageComponent } from './teams.page';

import { TeamsPageRoutingModule } from './teams-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TeamsPageRoutingModule
  ],
  declarations: [TeamsPageComponent]
})
export class TeamsPageModule { }
