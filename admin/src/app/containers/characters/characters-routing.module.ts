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
        path: 'add',
        loadChildren: './containers/characters-add/characters-add.module#CharactersAddModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRoutingModule { }
