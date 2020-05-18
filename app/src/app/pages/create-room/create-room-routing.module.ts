import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateRoomPageComponent } from './create-room.page';

const routes: Routes = [
  {
    path: '',
    component: CreateRoomPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateRoomPageRoutingModule { }
