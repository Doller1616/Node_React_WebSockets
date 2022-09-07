import { Component, OnInit } from '@angular/core';
import * as bootstrap  from 'bootstrap'; 


@Component({
  selector: 'app-comp5',
  templateUrl: './comp5.component.html',
  styleUrls: ['./comp5.component.scss']
})
export class Comp5Component implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  showToster(){
    const toastLiveExample:any = document.getElementById('liveToast')
    const toast = new bootstrap.Toast(toastLiveExample, { animation : true, delay: 1000 })
    toast.show()
  }

}
