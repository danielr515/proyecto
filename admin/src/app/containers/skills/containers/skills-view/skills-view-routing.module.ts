import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkillsViewComponent } from './skills-view.component';


const routes: Routes = [
  {
    path: '',
    component: SkillsViewComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkillsViewRoutingModule { }
