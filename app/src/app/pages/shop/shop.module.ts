import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShopPageComponent } from './shop.page';

import { ShopPageRoutingModule } from './shop-routing.module'

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ShopPageRoutingModule,
  ],
  declarations: [ShopPageComponent]
})
export class ShopPageModule { }
