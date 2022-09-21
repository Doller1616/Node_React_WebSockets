import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Comp5Component } from './comp5/comp5.component';
import { Comp6Component } from './comp6/comp6.component';

const routes: Routes = [
  {path:"five", component: Comp5Component},
  {path:"six", component: Comp6Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
