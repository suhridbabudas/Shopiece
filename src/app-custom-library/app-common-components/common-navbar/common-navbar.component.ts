import { Component, Input } from '@angular/core';
import { CustomButtonConfig } from 'src/app-custom-library/app-common-interfaces/ButtonConfig';
import { Menu } from 'src/app-custom-library/app-common-interfaces/Menu';


@Component({
  selector: 'app-common-navbar',
  templateUrl: './common-navbar.component.html',
  styleUrls: ['./common-navbar.component.css'],
})
export class CommonNavbarComponent {
@Input() public isUserLogin: boolean = false;

public navMenu!: Array<Menu>;
public buttonConfig: CustomButtonConfig = {
  buttonsGroup:[{
    buttonText: "Signup",
    buttonTextSize: 12,
    isHoverOn: true,
  },{
    buttonText: "Login",
    buttonTextSize: 12,
    isHoverOn: false,
  }]
}
}
