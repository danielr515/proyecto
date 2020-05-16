import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TypesComponent } from './types.component';


const routes: Routes = [
  {
    path: '',
    component: TypesComponent,
    children: [
      {
        path: '',
        loadChildren: './containers/types-view/types-view.module#TypesViewModule'
      },
      {
        path: 'addtype',
        loadChildren: './containers/types-add/types-add.module#TypesAddModule'
      },
      {
        path: 'addrelation',
        loadChildren: './containers/types-relation/types-relation.module#TypesRelationModule'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypesRoutingModule { }
