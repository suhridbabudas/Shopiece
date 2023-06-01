import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private route : Router){}
  canActivate(): boolean {
    let token = localStorage.getItem('token')
    let UserQualifier = localStorage.getItem('UserQualifier')
    if (token && UserQualifier) {
      return true;
    } else{
      alert("Please signup/login to view this section!")
      this.route.navigateByUrl('')
      return false
    }
     
  }

}
