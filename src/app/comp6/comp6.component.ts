import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';

@Component({
   selector: "app-six",
  template: `Component
  <h2> {{food}} </h2>
    `,
})
export class Comp6Component implements OnInit {
   food : any = "";
  constructor(private orderService : OrderService) { }

  ngOnInit(): void {
    this.orderService.getData().subscribe({
      next : (r) => { this.food = r.food
        console.log("########################", this.food);  
      },
      error : () => {},
    })
  }

}
