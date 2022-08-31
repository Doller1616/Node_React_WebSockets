import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Comp4Component } from './comp4/comp4.component';
import { Comp5Component } from './comp5/comp5.component';
import { Comp6Component } from './comp6/comp6.component';

const routes: Routes = [
  {path:"four", component: Comp4Component},
  {path:"five", component: Comp5Component},
  {path:"six", component: Comp6Component},
  {path:'signin', loadChildren: () => import('./signup/signup.module').then(m=>m.SignupModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
