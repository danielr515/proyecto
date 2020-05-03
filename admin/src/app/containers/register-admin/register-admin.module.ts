import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterAdminRoutingModule } from './register-admin-routing.module';
import { RegisterAdminComponent } from './register-admin.component';


@NgModule({
  declarations: [RegisterAdminComponent],
  imports: [
    CommonModule,
    RegisterAdminRoutingModule
  ]
})
export class RegisterAdminModule { }
