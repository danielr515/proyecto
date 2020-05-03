import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/shared/auth-guard/auth.guard';


const routes: Routes = [
  {
    path: 'login',
    loadChildren: './containers/login/login.module#LoginModule',
    // canActivate: [AuthGuard]
  },
  {
    path: 'register',
    loadChildren: './containers/register-admin/register-admin.module#RegisterAdminModule',
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
