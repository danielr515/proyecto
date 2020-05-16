import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsViewRoutingModule } from './skills-view-routing.module';
import { SkillsViewComponent } from './skills-view.component';


@NgModule({
  declarations: [SkillsViewComponent],
  imports: [
    CommonModule,
    SkillsViewRoutingModule
  ]
})
export class SkillsViewModule { }
