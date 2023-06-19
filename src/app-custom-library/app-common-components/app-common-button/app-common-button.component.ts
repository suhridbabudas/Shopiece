import { Component, Input } from '@angular/core';
import { CustomButtonConfig } from 'src/app-custom-library/app-common-interfaces/ButtonConfig';

@Component({
  selector: 'app-app-common-button',
  templateUrl: './app-common-button.component.html',
  styleUrls: ['./app-common-button.component.css']
})
export class AppCommonButtonComponent {
  @Input() public buttonConfig!: CustomButtonConfig;
}
