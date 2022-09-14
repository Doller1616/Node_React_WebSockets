import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidemenuComponent } from './Common/sidemenu';
import { DashboardComponent } from './dashboard.component';
import { OneComponent } from './Pages/page1.component'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidemenuComponent,
    OneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
