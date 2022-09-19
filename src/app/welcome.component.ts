import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  template: `
  <h1> Welcome Page </h1>
  <a routerLink="/auth/signin"  > Go to SignIn </a>
  <br/>
  <br/>
  <br/>
  <br/>
  `
})


export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
