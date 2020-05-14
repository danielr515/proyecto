import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TypesAddComponent } from './types-add.component';


const routes: Routes = [
  {
    path: '',
    component: TypesAddComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypesAddRoutingModule { }
