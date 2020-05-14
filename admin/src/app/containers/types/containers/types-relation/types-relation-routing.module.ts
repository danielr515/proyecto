import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TypesRelationComponent } from './types-relation.component';


const routes: Routes = [
  {
    path: '',
    component: TypesRelationComponent
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypesRelationRoutingModule { }
