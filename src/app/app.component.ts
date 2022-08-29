import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
   template: `
   <h1> Pages </h1>
   <button type="button" routerLink="/one">One</button>
   <button type="button" routerLink="comp/two">Two</button>
   <router-outlet></router-outlet>`,
})
export class AppComponent { }
