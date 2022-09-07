import { Component, OnInit } from '@angular/core';
import * as bootstrap from 'bootstrap';
import { AttendenceService } from '../attendence.service'

@Component({
  selector: 'app-comp4',
  template: ` <button class="btn btn-success" (click)="setAttendence()"> Set Attendence </button> 
  
   
  <div>
  <div *ngFor="let stud of allAttendece; let ind = index" class="card" style="width: 18rem;">
      <img src={{stud?.profile}} class="card-img-top" alt="...">
      <div class="card-body">
      <h5 class="card-title">{{stud?.name}}</h5>
       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
       
       <div class="row"> 
        <div class="col-md-6">
        <select class="form-control form-control-sm" (change)="handleMonth($event, stud, ind)">
         <option value="jan"> January </option> 
         <option value="feb"> Febuary </option> 
         <option value="mar"> March </option> 
         <option value="apr"> April </option> 
         <option value="may"> March </option> 
         <option value="jun"> June </option> 
         <option value="jul"> July </option> 
         <option value="aug"> August </option> 
         <option value="sept" selected> September </option> 
         <option value="oct"> October </option> 
         <option value="nov"> November </option> 
         <option value="dec"> December </option> 
       </select>
        </div>

        <div class="col-md-6">
            <span *ngFor="let attend of stud?.selectedMonth || stud?.sept" 
            class="rounded-pill p-1 m-1 text-white" 
            [ngStyle]="{'background-color':attend === 'P' ? 'yellowgreen' : 'orangered'}"> {{attend}} </span>
        </div>

       </div>
       
     </div>
</div>
  </div>

  <!-- Toster -->
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
export class Comp4Component implements OnInit {

  // import Module----------------------------------- Done
  // import HTTPClient Class in your component ------ 
  // create instance with dependency injection
  // Create UI Button
  // Add a method to it
  // hit API wit http methods

  allAttendece: any[] = [];
  constructor(private service: AttendenceService) { }


  data = { "Attendence": "P", "month": "oct", 'class': 1, 'section': 'A', 'rollNo': 1, id: "uuid" }

  ngOnInit(): void {
    this.getAttendence();
    this.handleMonth(null, null, 0)
  }

  setAttendence() {
    this.service.sendAttendence(this.data).subscribe({
      next: (value: any) => {
        console.log("value : ", value)
        this.getAttendence(); 
        this.firetoster()
      },
      error: (err: any) => {
        console.log("Error : ", err)
      }
    })
  }


  getAttendence() {
    this.service.fetchAttendence().subscribe({
      next: (data: any) => {
        this.allAttendece = data?.result;
        console.log(this.allAttendece)
      },
      error: (err) => {
        console.log("Error : ", err)
      }
    })
  }

  handleMonth(e:any, stud:any, ind:any){
   const month = e?.target?.value || 'jan';
   this.allAttendece[ind].selectedMonth = stud[month]
  }

  firetoster() {
    const toastLiveExample: any = document.getElementById('liveToast')
    const toast = new bootstrap.Toast(toastLiveExample, { animation: true, delay: 5000 })
    toast.show()
  }


}
