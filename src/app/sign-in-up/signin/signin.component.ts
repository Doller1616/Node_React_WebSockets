import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { AppService } from '../../app.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  template: `
     <h1> SignUp Page </h1>
    <button (click)="loginAndGoToTheDashboard()"> Login and Go to the Dashboard </button> 
  `,
})
export class SigninComponent implements OnInit {

  rootService
  constructor(private signInUpService : ServicesService, private router : Router) {
           
       this.rootService =  AppService        
  }

  ngOnInit(): void {
  }

  loginAndGoToTheDashboard = ()=> { 
    const userAndPwd = {
      "email": "eve.holt@reqres.in",
      "password": "cityslicka"
  }
    this.signInUpService.userSignIn(userAndPwd).subscribe({
      next: (r:any)=> { 
        this.rootService.setToken(r.token)
        this.router.navigateByUrl('/dashboard');
      },
      error : (e)=> { 
        console.error("Error", e);
        this.router.navigateByUrl('/signin');
      }
    })

  }

}


