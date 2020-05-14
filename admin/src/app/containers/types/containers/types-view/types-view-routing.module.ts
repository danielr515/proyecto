import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TypesViewComponent } from './types-view.component';


const routes: Routes = [
  {
    path: '',
    component: TypesViewComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypesViewRoutingModule { }
