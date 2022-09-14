import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` 
   
   <style>
     
 .custom-tooltip:hover:after{
	padding: 3px 6px;
	background: gray;
  color: #fff;
	content: attr(title);
	position: absolute;
	right: -40px;
	top: -26px;
}

   </style>


  <div class="card mb-2" style="width: 18rem;" *ngFor="let d of  studentAttend">
  <img class="card-img-top" height="100px"  width="100px" 
    src="https://drive.google.com/uc?id=1cHgXaO79XD1UXDkyECGFqKw_UBBaj-RX" alt="Card image cap">
  <div class="card-body" style="background-color: #c9c8c8 ;">
    <h5 class="card-title">Card title</h5>
        <select class="form-control form-control-sm my-2">
          <option value="1"> Jan </option>
      </select>
     <div class="d-flex position-relative" style="flex-wrap: wrap; gap:5px">
        <span [title]="d.year"
           *ngFor="let atten of daysInMonth" class="custom-tooltip rounded rounded-pill text-white d-grid" 
            style="min-width: 24px; place-content: center; box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;"
            [ngClass]=" d[month][atten] == 'P' ? 'bg-success' : 
                        d[month][atten] == 'A' ? 'bg-primary' : 'bg-secondary' ">
            {{  d[month][atten] ? d[month][atten] : 'n/a' }}
        </span>

     </div>
  </div>
</div>
  
  
  `
})
export class OneComponent implements OnInit {

  studentAttend: any = []
  month = "oct";
  daysInMonth : any = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get('https://student-attendence-management.herokuapp.com/get_student_deatils')
      .subscribe({
        next: (r:any) => {
           this.studentAttend = r?.result
            console.log("studentAttend", this.studentAttend);
            const days = this.daysInMonthFun('09', '2021');
            this.daysInMonth = [...Array(days).keys()]
        },
        error: (e) => console.log(e)
      })

  }


  daysInMonthFun = (month:any, year:any) => {
    return new Date(year, month, 0).getDate();
}



}
