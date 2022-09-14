import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
    selector: 'sidemenu',
    template: `
     <style>
        .animate-menu {
            width : '50px';
            transition: width 1s cubic-bezier(0.075, 0.82, 0.165, 1);
        }
    
    </style>
       
  <!-- Approach I -->
  <div class="position-relative animate-menu" id="sidemenu-container" style="width: 50px;cursor:pointer">

  <div class="bg-secondary rounded-circle border border-info p-1 position-absolute d-grid" 
   style="place-content:center; right: -34px;top: 7px;width: 43px;height: 41px;" (click)="toggleSideMenu()">  
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" class="bi bi-list" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg>
    </div>

   <div class="row rounded bg-secondary">
    <div class="col-md-12 p-3 border-bottom border-info position-relative" *ngFor="let r of sidemenu">
        <a routerLink={{r.address}} class="d-flex" style="gap:10px; flex-wrap:wrap; justify-content: center;">
      <div [innerHtml]="transform(r.icons)" ></div>
      <label class="text-white"> {{r.title}} </label>
    </a>
    </div>    
 </div>

  `
})
export class SidemenuComponent {
  
    sidemenu: any = [

        { title: 'One', address: '/dashboard/one', icons:`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#fff" class="bi bi-basket-fill" viewBox="0 0 16 16">
        <path d="M5.071 1.243a.5.5 0 0 1 .858.514L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 6h1.717L5.07 1.243zM3.5 10.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3z"/>
      </svg>` },
        { title: 'Two', address: '/dashboard/two', icons: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#fff" class="bi bi-balloon-heart-fill" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8.49 10.92C19.412 3.382 11.28-2.387 8 .986 4.719-2.387-3.413 3.382 7.51 10.92l-.234.468a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2.376 2.376 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.235-.468ZM6.726 1.269c-1.167-.61-2.8-.142-3.454 1.135-.237.463-.36 1.08-.202 1.85.055.27.467.197.527-.071.285-1.256 1.177-2.462 2.989-2.528.234-.008.348-.278.14-.386Z"/>
      </svg>` },
        { title: 'Three', address: '/dashboard/three', icons: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#fff" class="bi bi-award-fill" viewBox="0 0 16 16">
        <path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z"/>
        <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"/>
      </svg>` }
    ]

    constructor(private sanitizer: DomSanitizer) {
    }

    toggleSideMenu = ()=> { 
        let sidemenuContainer:any = document.getElementById("sidemenu-container");

       if(sidemenuContainer?.style.width == '200px'){
        sidemenuContainer.style.width = "50px";
            
        }else {
          sidemenuContainer.style.width = "200px"
        }
    }


    transform = (htmlString:any) => {
      return this.sanitizer.bypassSecurityTrustHtml(htmlString);
    }

}
