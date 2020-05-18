import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopPageComponent } from './shop.page';

const routes: Routes = [
  {
    path: '',
    component: ShopPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopPageRoutingModule { }
