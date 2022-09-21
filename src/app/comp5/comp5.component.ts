import { Component, OnInit } from '@angular/core';
import * as bootstrap  from 'bootstrap'; 
import { OrderService } from '../order.service';

@Component({
  selector: 'app-comp5',
  templateUrl: './comp5.component.html',
  styleUrls: ['./comp5.component.scss']
})
export class Comp5Component implements OnInit {

  constructor(private orderService : OrderService) { }

  ngOnInit(): void {

  }

  showToster(){
    // const toastLiveExample:any = document.getElementById('liveToast')
    // const toast = new bootstrap.Toast(toastLiveExample, { animation : true, delay: 1000 })
    // toast.show()
    this.orderService.setData({food : "Red Sause Pasta" })
  }

}
