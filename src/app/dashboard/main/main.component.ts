import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `<h1> Dashboard </h1>
              <a routerLink='/dashboard/admin'> GO To Admin Dashboard </a>`,
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
