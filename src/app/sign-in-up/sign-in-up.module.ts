import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ServicesService } from './services.service'

import { SignInUpRoutingModule } from './sign-in-up-routing.module';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';


@NgModule({
  declarations: [
    SignupComponent,
    SigninComponent
  ],
  imports: [
    CommonModule,
    SignInUpRoutingModule,
    HttpClientModule
  ],
  providers: [ServicesService]
})
export class SignInUpModule { }
