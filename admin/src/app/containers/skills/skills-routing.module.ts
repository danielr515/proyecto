import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkillsComponent } from './skills.component';


const routes: Routes = [
  {
    path: '',
    component: SkillsComponent,
    children: [
      {
        path: '',
        loadChildren: './containers/skills-view/skills-view.module#SkillsViewModule'
      },
      {
        path: 'add',
        loadChildren: './containers/skills-add/skills-add.module#SkillsAddModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkillsRoutingModule { }
