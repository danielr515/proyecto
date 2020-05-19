import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoomsPageComponent } from './rooms.page';

import { RoomsPageRoutingModule } from './rooms-routing.module';
import { RoomsListComponent } from './components/rooms-list/rooms-list.component';
import { PrivateRoomsModalComponent } from './components/private-rooms-modal/private-rooms-modal.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RoomsPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RoomsPageComponent, RoomsListComponent, PrivateRoomsModalComponent]
})
export class RoomsPageModule { }
