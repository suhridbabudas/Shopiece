import { Injectable } from '@angular/core';
import { API_ROUTES } from 'src/app/constants.ts/intex';

@Injectable({
  providedIn: 'root'
})
export class IsInterceptorRequiredService {

  constructor() { }

  public isTokenNeeded(route:string){
    switch(route){
      case API_ROUTES.LOGOUT: return true; break;
      case API_ROUTES.FORGOT_PASSSWORD: return true; break;
      case API_ROUTES.GET_USER_PROFILE: return true; break;
      case API_ROUTES.RESET_PASSWORD: return true; break;
      case API_ROUTES.UPDATE_PROFILE: return true; break;
      default: return false;
    }
  }


}
