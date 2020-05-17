import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { AuthGuard } from './auth-guard/auth.guard';
import { NoAuthGuard } from './noauth-guard/noauth.guard';
import { SubmenuComponent } from './submenu/submenu.component';
import { SkillClassPipe } from './pipes/skill-class.pipe';
import { SkillModePipe } from './pipes/skill-mode.pipe';



@NgModule({
  declarations: [
    MenuComponent,
    SubmenuComponent,
    SkillClassPipe,
    SkillModePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MenuComponent,
    SubmenuComponent,
    SkillClassPipe,
    SkillModePipe
  ],
  providers: [
    AuthGuard,
    NoAuthGuard
  ]
})
export class SharedModule { }
