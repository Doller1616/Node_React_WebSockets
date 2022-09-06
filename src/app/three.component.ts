import { Component } from '@angular/core';

//--------data collection -------------- 
// input  ('checkbox', date, number, file, radio)
// select

@Component({
    template: `
       <style>
        #cont-ID {}

       .container {
           margin: 20px 0 0 10px;
           display: flex;
           flex-wrap: wrap;
           background-image: url('assets/CANDIDATE 4 -ANS 1_GOOD.png');
           justify-content: space-evenly; /* horizontal */
           align-items: center; /*vertical */
           height: 99vh;
           background-;
       }

       .container button {
           justify-self: flex-end;
       }

        input[type="file"] {
           background-color: pink;
        }

        input[type="radio"]{
            position: absolute;
            top: 0
        }

        .button-sty { 
            height: 150px;
            width: 150px;
            background-color: #f7f7f7;;
            background-image: url("https://upload.wikimedia.org/wikipedia/en/8/86/Avatar_Aang.png");
            background-size:cover;
           /* display: flex;
            align-items: center;
            justify-content: center;  */
            object-fit: contain;
            display: grid;
            place-content: center;
            border-radius: 91px;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
            overflow: hidden;
        }

        .button-sty input { 
            height: 0;
            width: 0;
        }


       </style>

       <div id="cont-ID" class="container">
      
        
       <div class="my-check">
        <input  type="text"  [(ngModel)]="inputVal" />
        <div>
          <span> <input  type="checkbox" /> </span>
          <span class="soda">  soda cane </span>
        </div>
        </div>
       
       <div>
        <p>
       <!-- <input  type="file" (change)="uploadFile($event)" multiple /></p> -->
       <input  type="date" /> 
       </div>

       <label class="button-sty">
       <input  type="file" (change)="uploadFile($event)" multiple />
       <img *ngIf="userImg" src={{userImg}} width="100%" height="100%" />    
       </label>

       </div>
       
       
    `
})
export class ThreeComponent {

    inputVal: any
    userImg : any// = "https://upload.wikimedia.org/wikipedia/en/8/86/Avatar_Aang.png"
    
    fire() {
        console.log(this.inputVal);
    }

    uploadFile(e:any){
    
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            console.log(reader.result)
         this.userImg = reader.result
        }
        
    }
}