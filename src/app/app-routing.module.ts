import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OneComponent} from './one.component';

const routes: Routes = [
  {path: "one", component: OneComponent},
  {path: "comp", loadChildren: ()=> import('./signup_signin/lazy-mo.module').then((m)=>m.LazyMoModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
