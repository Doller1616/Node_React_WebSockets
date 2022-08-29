import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
// Re usable componrn 
// Not Page

@Component({
    selector: "two-peace",
    template: `    
    Two Peace is Working
                <button (click)="mybtn()" > Click Me </button>
                
                <div class="card-view"  *ngFor="let obj of result"> 
                    
                     <div class="img-sec">
                       <img src={{obj?.img}} height="150" width="150" />
                     </div>

                     <div class="info-sec">
                       <p><b> Name:</b> <i>{{obj?.name}}</i></p>
                       <p><b> Height:</b> {{obj.height}}</p>
                       <p><b> Power Level:</b> {{obj.power_level}}</p>
                     </div>


                     <div class="" *ngFor="let evol of obj.evolutions">
                           <pokemon-card [pokemon]="evol">  </pokemon-card>
                     </div>

                </div> `
})
export class TwoComponent implements OnInit {

    result: any = [];

    // Dependency Injection : Providing instance at runtime
    constructor(private http: HttpClient) {
        console.log("Constructor 1")
    }

    ngOnInit(): void {

        console.log("ngOnInit :  3");

        this.http.get("https://pokimondummyapi.herokuapp.com/pokimon.json")
            .subscribe({
                next: (r: any) => {
                    this.result = r.pokimons
                    console.log(r)
                },
                error: (err: any) => {
                    console.error('Observer got an error: ', err)
                }
            })
    }

    mybtn() {
        console.log("mybtn")
    }

}