import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersAddComponent } from './characters-add.component';


const routes: Routes = [
  {
    path: '',
    component: CharactersAddComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersAddRoutingModule { }
