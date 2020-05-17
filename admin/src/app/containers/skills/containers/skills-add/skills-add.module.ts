import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsAddRoutingModule } from './skills-add-routing.module';
import { SkillsAddComponent } from './skills-add.component';
import { SkillsFormComponent } from '../../components/skills-form/skills-form.component';
import { SharedModule } from 'src/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SkillsAddComponent,
    SkillsFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SkillsAddRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SkillsAddModule { }
