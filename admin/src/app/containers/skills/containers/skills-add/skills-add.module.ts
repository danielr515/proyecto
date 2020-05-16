import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsAddRoutingModule } from './skills-add-routing.module';
import { SkillsAddComponent } from './skills-add.component';


@NgModule({
  declarations: [SkillsAddComponent],
  imports: [
    CommonModule,
    SkillsAddRoutingModule
  ]
})
export class SkillsAddModule { }
