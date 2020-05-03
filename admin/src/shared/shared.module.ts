import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { AuthGuard } from './auth-guard/auth.guard';



@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MenuComponent
  ],
  providers: [
    AuthGuard
  ]
})
export class SharedModule { }
