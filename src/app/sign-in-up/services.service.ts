import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../app.service'

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  BASEURL: String
  
  constructor(private http : HttpClient) { 
     this.BASEURL = AppService.BASEURL;
  }

  
  userSignIn(body:any){
    return this.http.post(`${this.BASEURL}/api/login`, body);
  }

  
  userSignUp(body:any){
   
    return this.http.post(`${this.BASEURL}/api/register`, body);
  }

}
