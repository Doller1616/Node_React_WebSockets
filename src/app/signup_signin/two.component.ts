import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
// Re usable componrn 
// Not Page

@Component({
    selector: "two-peace",
    template: `Two Peace is Working
                <button (click)="mybtn()" > Click Me </button>
                
                <div *ngFor="let obj of result"> 
                       <img src={{obj?.avatar}} />
                       <p> email: <i>{{obj?.email}}</i></p>
                       <p> first_name: {{obj.first_name}}</p>
                       <p> last_name: {{obj.last_name}}</p>
                </div>`
})
export class TwoComponent implements OnInit{
     
    result:any = [];

    // Dependency Injection : Providing instance at runtime
    constructor(private http : HttpClient){ 
       console.log("Constructor 1")
    }

    ngOnInit(): void {

        console.log("ngOnInit :  3");

        this.http.get("https://reqres.in/api/users")
        .subscribe({
            next: (r:any) => { this.result = r?.data; },
            error: (err:any) =>{
                console.error('Observer got an error: ' , err)
            } 
          })
    }

    mybtn(){
        console.log("mybtn")
    }

}