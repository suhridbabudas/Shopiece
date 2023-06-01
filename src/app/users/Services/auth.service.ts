import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from 'src/app/api-config';
import { environment } from 'src/environments/environment.development';
// import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  needAuthorisation() {
    // if (this.userForgotPassword() || this.userResetPassword() || this.userLogout() || this.userUpdateProfile() || this.getUserProfile()) {
    //   return true
    // } else {
    //   return false
    // }
  }

  userSignUp(data: any) {
    return this.http.post(`${environment.base_api_url}${config.signUp_api}`, data)
  }

  userLogin(data: any) {
    return this.http.post(`${environment.base_api_url}${config.login_api}`, data)
  }

  userUpdateProfile() {
    return true
  }
  getUserProfile() {
    return true
  }
  userForgotPassword() {
    return true
  }
  userResetPassword() {
    return true
  }
  userLogout() {
    return true
  }
}
