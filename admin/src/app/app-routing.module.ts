import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/shared/auth-guard/auth.guard';
import { NoAuthGuard } from 'src/shared/noauth-guard/noauth.guard';


const routes: Routes = [
  {
    path: 'login',
    loadChildren: './containers/login/login.module#LoginModule',
    canActivate: [NoAuthGuard]
  },
  {
    path: 'index',
    loadChildren: './containers/index/index.module#IndexModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'register',
    loadChildren: './containers/register-admin/register-admin.module#RegisterAdminModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'types',
    loadChildren: './containers/types/types.module#TypesModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'characters',
    loadChildren: './containers/characters/characters.module#CharactersModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'skills',
    loadChildren: './containers/skills/skills.module#SkillsModule',
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
