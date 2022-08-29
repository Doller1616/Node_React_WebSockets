
import { Component } from '@angular/core';

@Component({
  selector: 'one-on-one',
   template: `
    <style>
      .dyeImg {
        border-radius : 20px;
      }
    </style>
   
  <h1> {{title}} </h1>
  


  <div *ngIf="show; else other_content">
    <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" />
  </div>
  <ng-template #other_content>
     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzF--y90nRLQO1-jWASJ81YnMrO_xn4i7bJnvx2pBNcVaG3zALzIAoHBHNRTZiVT4l_b8&usqp=CAU" />
   </ng-template>

   <button (click)="toggalImg()" > Click </button>

    <hr>

    <span *ngFor="let url of emplyees">
     <img class="dyeImg" src={{url}}  height="45px" width="45px"/> 
     &nbsp;
    </span>

    <hr>
    <input [(ngModel)]="myInput.s.b.c.d" style="background-color: yellow"  />
    <span *ngIf="myInput.s.b.c.d == 'no'"> Error </span> 
    <label> {{myInput.s.b.c.d}} </label>

    <hr>
    <br/>
    <br/>
    <br/>
    <br/>
    -------------------------------------------------------
    <br/>
    <router-outlet></router-outlet>
  `,
})
export class OneComponent {
  title = 'Arya';
  show = true;
  myInput = {
    s: {
      b: {
        c: {
          d : 'sonata'
        }
      }
    }
  }
  emplyees = ["https://reqres.in/img/faces/7-image.jpg",
              "https://reqres.in/img/faces/8-image.jpg",
              "https://reqres.in/img/faces/9-image.jpg",
              "https://reqres.in/img/faces/10-image.jpg",
              "https://reqres.in/img/faces/11-image.jpg"]

  toggalImg(){
    this.show = !this.show
    console.log(this.myInput);
  }


//   constructor(){
//     console.log("Constructor 1")
//  }

//  ngOnChanges(changes: SimpleChanges): void {
//      console.log("ngOnChanges :  2")
//  }

//  ngOnInit(): void {
//      console.log("ngOnInit :  3")
  
//  }

//  ngDoCheck() : void {
//      console.log("ngDoCheck :  4")
//  }

//  ngAfterContentInit() : void {
//      console.log("ngAfterContentInit :  5")
//  }

//  ngAfterContentChecked() : void {
//      console.log("ngAfterContentInit :  6")
//  }

//  ngAfterViewInit() : void {
//      console.log("ngAfterViewInit :  7")
//  }

//  ngAfterViewChecked() : void {
//      console.log("ngAfterViewChecked :  8")
//  }

//  ngOnDestroy() : void {
//      console.log("ngOnDestroy :  9")
//  }


//  mybtn(){
//      console.log("mybtn")
//  }
  
}
