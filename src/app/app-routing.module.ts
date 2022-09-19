import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './common/auth.guard';
import { WelcomeComponent } from './welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent},
  { path: 'auth', loadChildren:()=> import('./sign-in-up/sign-in-up.module').then((m)=>m.SignInUpModule) },
  { path: 'dashboard',  canActivate :[AuthGuard],
    loadChildren:()=> import('./dashboard/dashboard.module').then((m)=>m.DashboardModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
