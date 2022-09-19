import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MainComponent } from './main/main.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from '../common/auth.guard';


@NgModule({
  declarations: [
    MainComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  providers: [AuthGuard]
})
export class DashboardModule { }
