import { Component } from '@angular/core';
import { Router } from "@angular/router"

@Component({
  selector: 'app-root',
  template: `<h1> Login </h1>
   
     <input type="button" value="go to signup" (click)="navigation()" />
    
    `
})
export class LoginComponent {
  title = 'angular-navigation';
  
  constructor(private router : Router ){}


  navigation = () => { 
     this.router.navigateByUrl('/dashboard')
  }
}