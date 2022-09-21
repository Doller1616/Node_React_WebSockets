import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class OrderService {

  private order  = new BehaviorSubject({ food : 'pizza' })

  private orderObserver = this.order.asObservable();

  setData = (data: any) =>  {
    console.log("first")
    return this.order.next(data);
  }

  getData = () =>  {
    return this.orderObserver;
  }

}