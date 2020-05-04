import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { AuthGuard } from './auth-guard/auth.guard';
import { NoAuthGuard } from './noauth-guard/noauth.guard';



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
    AuthGuard,
    NoAuthGuard
  ]
})
export class SharedModule { }
