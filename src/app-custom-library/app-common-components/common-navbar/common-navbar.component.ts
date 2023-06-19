import { Component, Input } from '@angular/core';
import { Menu } from 'src/app-custom-library/app-common-interfaces/Menu';


@Component({
  selector: 'app-common-navbar',
  templateUrl: './common-navbar.component.html',
  styleUrls: ['./common-navbar.component.css'],
})
export class CommonNavbarComponent {
@Input() public isUserLogin: boolean = false;

public navMenu!: Array<Menu>;
}
