import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NoAuthGuard } from 'src/shared/noauth-guard/noauth.guard';
import { AuthGuard } from 'src/shared/auth-guard/auth.guard';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule),
    canActivate: [NoAuthGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule),
    canActivate: [NoAuthGuard]
  },
  {
    path: 'create-room',
    loadChildren: () => import('./pages/create-room/create-room.module').then(m => m.CreateRoomPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'select-team',
    loadChildren: () => import('./pages/select-team/select-team.module').then(m => m.SelectTeamPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'game',
    loadChildren: () => import('./pages/game/game.module').then(m => m.GamePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },




];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
