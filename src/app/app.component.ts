import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
   
    <style>
    
    .manage{
      display: flex;
      /* display: grid; */
      flex-wrap: wrap;
      gap:10px;
      background-color: blueviolet;
      padding: .8em;
      /* height : 100vh; */
      /* place-content: center; */
      justify-content: center;
      align-items: center;
      overflow: hidden;
    }

    .sidemenu {
      display: flex;
      /* flex-direction: column; */
      flex-flow: column wrap;
      flex-wrap: wrap;
      gap:10px;
      background-color: navy;
      padding: .8em;
      justify-content: center;
      align-items: center;
      width: 12em;
      height: 300px;
    }
    .manage div,  .sidemenu div {
        background-color : #00f6fd54;
        padding: .8em;
        border-radius: 10px;
        color: #fff;
        box-shadow:rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgb(255 255 255 / 35%) 0px -2px 6px 0px inset;
    }

    /* .manage :first-child {
      background-color: yellow;
      color: brown;
      position: absolute;
      font-weight: bold;
      top :1px
    } */

    /* .manage :nth-child(2){
       left : 30%;
       position : fixed
    } */




    </style>
  
    <div class="manage" id="header">

    <div> C1 </div>
    <div> C2</div>
    <div> C3 </div>
    <div> C4 </div>
    <div> C5 </div>
    <div> C6 </div>
    <div> C7</div>
    <div> C8 </div>
    <div> C9 </div>

    </div >
<div style="display:flex; gap: 1em;"> 
<div class="sidemenu" >
<div> S1 </div>
<div> S2</div>
<div> S3 </div>
<div> S4 </div>
<div> S5 </div>
<div> S6 </div>
<div> S7</div>
<div> S8 </div>
<div> S9 </div>
</div>

<router-outlet></router-outlet>

  </div>
    
  
     `,
})
export class AppComponent {
  title = 'angular-auth-guard';
}
