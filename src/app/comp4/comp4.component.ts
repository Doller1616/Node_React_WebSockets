import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import * as bootstrap  from 'bootstrap'; 

@Component({
  selector: 'app-comp4',
  template: ` <button class="btn btn-success" (click)="setAttendence()"> Set Attendence </button> 
  
  
  <!-- Jai Bhadra Kali -->
  <div class="toast-container position-fixed bottom-0 end-0 p-3">
  <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      
      <strong class="me-auto"> Data Added Successfully</strong>
      <!-- <small>11 mins ago</small> -->
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
     
      <img src="https://upload.wikimedia.org/wikipedia/en/8/86/Avatar_Aang.png" 
          class="rounded me-2" alt="...">
    </div>
  </div>
  </div>
  
  
  `,
})
export class Comp4Component {

  // import Module----------------------------------- Done
  // import HTTPClient Class in your component ------ 
  // create instance with dependency injection
  // Create UI Button
  // Add a method to it
  // hit API wit http methods


  constructor(private http : HttpClient){ }
  reqUrl = 'https://03b4-2405-201-402e-a83a-55d1-b3b3-eb4f-8040.in.ngrok.io/fill_attendence?class=1&section=A&rollNo=1'
  data = { "Attendence":"A",  "month":"oct", 'class': 5, 'section': 'B', 'rollNo': 1 , id: "uuid"  }


  setAttendence() {
    this.http.patch(this.reqUrl, this.data )
     .subscribe({ 
        next : (value:any) => {
            console.log("value : ", value) 
            this.firetoster() },
        error : (err)=> {
          console.log("Error : ", err) 
        }
  })
  }



  firetoster(){
    const toastLiveExample:any = document.getElementById('liveToast')
    const toast = new bootstrap.Toast(toastLiveExample, { animation : true, delay: 5000 })
    toast.show()
  }

  
}
