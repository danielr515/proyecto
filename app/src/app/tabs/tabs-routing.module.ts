import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'rooms',
        loadChildren: () => import('../pages/rooms/rooms.module').then(m => m.RoomsPageModule)
      },
      {
        path: 'teams',
        loadChildren: () => import('../pages/teams/teams.module').then(m => m.TeamsPageModule)
      },
      {
        path: 'shop',
        loadChildren: () => import('../pages/shop/shop.module').then(m => m.ShopPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../pages/profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: '',
        redirectTo: 'rooms',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
