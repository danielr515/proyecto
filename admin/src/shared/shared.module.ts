import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { AuthGuard } from './auth-guard/auth.guard';
import { NoAuthGuard } from './noauth-guard/noauth.guard';
import { SubmenuComponent } from './submenu/submenu.component';



@NgModule({
  declarations: [
    MenuComponent,
    SubmenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MenuComponent,
    SubmenuComponent
  ],
  providers: [
    AuthGuard,
    NoAuthGuard
  ]
})
export class SharedModule { }
