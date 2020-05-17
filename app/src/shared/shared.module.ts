import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './auth-guard/auth.guard';
import { NoAuthGuard } from './noauth-guard/noauth.guard';
import { SkillClassPipe } from './pipes/skill-class.pipe';
import { SkillModePipe } from './pipes/skill-mode.pipe';



@NgModule({
  declarations: [
    SkillClassPipe,
    SkillModePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SkillClassPipe,
    SkillModePipe
  ],
  providers: [
    AuthGuard,
    NoAuthGuard
  ]
})
export class SharedModule { }
