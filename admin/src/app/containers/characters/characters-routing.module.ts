import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersComponent } from './characters.component';


const routes: Routes = [
  {
    path: '',
    component: CharactersComponent,
    children: [
      {
        path: '',
        loadChildren: './containers/characters-view/characters-view.module#CharactersViewModule'
      },
      {
        path: 'addcharacter',
        loadChildren: './containers/characters-add/characters-add.module#CharactersAddModule'
      },
      {
        path: 'viewskills',
        loadChildren: './containers/skills-view/skills-view.module#SkillsViewModule'
      },
      {
        path: 'addskill',
        loadChildren: './containers/skills-add/skills-add.module#SkillsAddModule'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRoutingModule { }
