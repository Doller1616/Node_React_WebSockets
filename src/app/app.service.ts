import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
   
  static TOKEN_KEY : string = 'TOKEN';
  static BASEURL = "https://reqres.in";

  static setToken = (token : string) => {
    sessionStorage.setItem(AppService.TOKEN_KEY, token)
  }

  static getToken = () => {
    return sessionStorage.getItem(AppService.TOKEN_KEY);
  }


  


}
