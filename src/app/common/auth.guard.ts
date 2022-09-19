import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router'
import { AppService } from '../app.service'

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate, CanActivateChild {

  rootService

  constructor(private router: Router) {
    this.rootService = AppService
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    if (this.rootService.getToken()) {
      
      return true;
    }
    this.router.navigateByUrl('/');
    return false;

  }


  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
     console.log(this.rootService.getToken())

    if (this.rootService.getToken() == 'forAdmin') {
        return true;
    }
    this.router.navigateByUrl('/dashboard');
    return false;
  }

}
