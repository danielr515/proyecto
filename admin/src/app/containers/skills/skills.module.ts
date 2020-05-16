import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsRoutingModule } from './skills-routing.module';
import { SkillsComponent } from './skills.component';
import { SharedModule } from 'src/shared/shared.module';
import { SkillsListComponent } from './components/skills-list/skills-list.component';


@NgModule({
  declarations: [SkillsComponent, SkillsListComponent],
  imports: [
    CommonModule,
    SharedModule,
    SkillsRoutingModule
  ]
})
export class SkillsModule { }
