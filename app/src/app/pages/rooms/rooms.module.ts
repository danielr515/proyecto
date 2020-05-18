import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RoomsPageComponent } from './rooms.page';

import { RoomsPageRoutingModule } from './rooms-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RoomsPageRoutingModule
  ],
  declarations: [RoomsPageComponent]
})
export class RoomsPageModule { }
