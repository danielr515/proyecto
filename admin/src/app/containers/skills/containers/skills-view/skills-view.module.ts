import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsViewRoutingModule } from './skills-view-routing.module';
import { SkillsViewComponent } from './skills-view.component';
import { SkillsListComponent } from '../../components/skills-list/skills-list.component';
import { SharedModule } from 'src/shared/shared.module';


@NgModule({
  declarations: [
    SkillsViewComponent,
    SkillsListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SkillsViewRoutingModule
  ]
})
export class SkillsViewModule { }
