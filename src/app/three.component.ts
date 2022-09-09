import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray, NgForm } from '@angular/forms'

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
           /* background-image: url('assets/CANDIDATE 4 -ANS 1_GOOD.png'); */
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
      
        
       <!-- <div class="my-check">
        <input  type="text"  [(ngModel)]="inputVal" />
        <div>
          <span> <input  type="checkbox" /> </span>
          <span class="soda">  soda cane </span>
        </div>
        </div>
       
       <div>
        <p>
        <input  type="file" (change)="uploadFile($event)" multiple /></p>
       <input  type="date" /> 
       </div> -->
       <div>
       <!-- Image -->
       <label class="button-sty">
       <input  type="file" (change)="uploadFile($event)" multiple />
       <!-- <img *ngIf="userImg" src={{userImg}} width="100%" height="100%" />     -->
       </label>
       
       <!-- ngNativeValidate (to add HTML  Validation) -->
       <!-- <form (ngSubmit)="submitForm($event)" ngNativeValidate>
           <input type="text" [(ngModel)]="data.username" name="username" required/> <br/>   
           <input type="email" [(ngModel)]="data.email" name="email" required/> <br/>  
           <input type="number" max="3" [(ngModel)]="data.phone" name="phone" required/> <br/>  
           <input type="date" [(ngModel)]="data.dob" name="dob" required/> <br/>  
           <input type="reset"  /> <br/>  
           <input type="submit" value='submit'  [disabled]="isFormValid" />  
        </form> -->


          <form #demoForm="ngForm">
           <input type="number" [(ngModel)]="data.username" name="username" 
              #username="ngModel" max="2"  /> <br/>   

            <span *ngIf="username.invalid && (username.dirty || username.touched)" 
              style="color: red"> Invalid Filed </span> <br/>  

           <input type="button" value="submit" [disabled]="!demoForm.valid" (click)="submitForm(demoForm.form)" />  

          </form>



    <form #userForm="ngForm" class="row g-3">

    <label for="validationServer01" class="form-label">First name</label>
    <input type="number" [(ngModel)]="data.username" name="one" min="3"
          class="form-control is-valid is-invalid" #username='ngModel' 
          [class.is-invalid]="username.valid" [class.is-valid]="!username.valid"   required>
    <div class="valid-feedback">  Looks good!  </div>
    
    <input type="button" class="btn btn-primary" [disabled]="!userForm.valid"
        value="submit" (click)="submitFormII(userForm)" />  
        
    </form>


  </div>
    
        
       </div>
       
        
       
    `
})
export class ThreeComponent {

    inputVal: any
    userImg: any// = "https://upload.wikimedia.org/wikipedia/en/8/86/Avatar_Aang.png"

    data = {
        username: "",
        email: "",
        phone: "",
        dob: "",
    }

    isFormValid: any = Object.values(this.data).every((v: any) => !!v);

    fire() {
        console.log(this.inputVal);
    }

    uploadFile(e: any) {

        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            console.log(reader.result)
            this.userImg = reader.result
        }

    }

    submitForm(username: any) {
        console.log("eeeeeeeeeeeeeeeeeeeeeeeeee", username)
    }

    submitFormII(username: any) {
        console.log("eeeeeeeeeeeeeeeeeeeeeeeeee", username.control.controls)
    }
}