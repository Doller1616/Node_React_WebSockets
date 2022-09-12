import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1> Dashboard </h1>
              <div style="display:flex; gap:10px">
              <sidemenu></sidemenu>
              <router-outlet> </router-outlet>
            </div>
             `
})
export class DashboardComponent {
  
}
