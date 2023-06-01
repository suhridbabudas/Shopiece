import { Component } from '@angular/core';
import { Users } from './Model/users.model';
import { FormGroup, FormBuilder, Validators } from "@angular/forms"
import { AuthService } from './Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  public loginForm = new Users('', '')

  constructor(
    private fb: FormBuilder,
    private _authService: AuthService,
    private route: Router
  ) { }

  public signupForm = this.fb.group({
    UserQualifer: [, Validators.required],
    FirstName: ['', Validators.required],
    MiddleName: [''],
    LastName: ['', Validators.required],
    Email: ['', Validators.required],
    Phone: [''],
    Password: ['', Validators.required],
    AvatarUrl: ['']
  })


  onSignup() {

    console.log('hallow');

    console.log(this.signupForm.value);
    this.signupForm.valid
    this._authService.userSignUp(this.signupForm.value).subscribe((res: any) => {
      console.log(res);
      console.log(res.message);
      this.signupForm.reset()
    })
  }

  onLogin() {
    console.log(this.loginForm);
    let userLoginData = {
      Email: this.loginForm.email,
      Password: this.loginForm.password
    }
    console.log(userLoginData);
    this._authService.userLogin(userLoginData).subscribe((res: any) => {
      console.log(res);
      console.log(res.menu);
      if (res.data.UserQualifier === 0) {
        console.log('Admin is here');
      } else {
        console.log('User is here');
      }

      localStorage.setItem('UserQualifier', res.data.UserQualifier)
      console.log("Message" + res.message);
      console.log("Token" + res.token);
      localStorage.setItem("token", res.token)
      let menu = JSON.stringify(res.menu)
      localStorage.setItem("menu", menu)

      this.route.navigateByUrl('')
    })
  }

  public userLogin: boolean = true
  onFormChange() {
    this.userLogin = !this.userLogin
  }
}
