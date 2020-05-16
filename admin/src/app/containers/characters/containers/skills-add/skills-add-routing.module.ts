import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkillsAddComponent } from './skills-add.component';


const routes: Routes = [
  {
    path: '',
    component: SkillsAddComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkillsAddRoutingModule { }
