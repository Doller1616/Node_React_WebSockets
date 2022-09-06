import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OneComponent} from './one.component';
import { ThreeComponent } from './three.component';

const routes: Routes = [
  {path: "one", component: OneComponent},
  {path: "comp", loadChildren: ()=> import('./signup_signin/lazy-mo.module').then((m)=>m.LazyMoModule)},
  {path: "three", component: ThreeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
