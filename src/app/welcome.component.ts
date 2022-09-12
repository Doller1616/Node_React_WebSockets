import { Component } from '@angular/core';
import { Router } from "@angular/router"

@Component({
  selector: 'app-root',
  template: `<h1> Welcome </h1>
           <input type="button" value="Login" (click)="navigation()" /> `
})
export class WelcomeComponent {
  title = 'angular-navigation';
  
  constructor(private router : Router ){}


  navigation = () => { 
     this.router.navigateByUrl('/login')
  }
}