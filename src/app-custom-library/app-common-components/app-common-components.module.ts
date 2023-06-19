import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonNavbarComponent } from './common-navbar/common-navbar.component';
import { RouterModule } from '@angular/router';
import { AppCommonButtonComponent } from './app-common-button/app-common-button.component';



@NgModule({
  declarations: [
    CommonNavbarComponent,
    AppCommonButtonComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [CommonNavbarComponent],
})
export class AppCommonComponentsModule { }
