import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsPageComponent } from './rooms.page';

const routes: Routes = [
  {
    path: '',
    component: RoomsPageComponent,
  },
  {
    path: ':room',
    loadChildren: () => import('./containers/room/room.module').then(m => m.RoomPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsPageRoutingModule { }
