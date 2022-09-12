import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { LoginComponent } from './login.component';
import { OneComponent } from './Pages/page1.component';
import { TwoComponent } from './Pages/page2.component';
import { ThreeComponent } from './Pages/page3.component';
import { SingnupComponent } from './singup.component copy';
import { WelcomeComponent } from './welcome.component';

const routes: Routes = [
  {path:'', component : WelcomeComponent},
  {path:'login', component : LoginComponent},
  {path:'signup', component : SingnupComponent},
  {path:'dashboard',  component: DashboardComponent ,children : [
     {path: '', component: OneComponent},
     {path: 'two', component: TwoComponent},
     {path: 'three', component: ThreeComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
