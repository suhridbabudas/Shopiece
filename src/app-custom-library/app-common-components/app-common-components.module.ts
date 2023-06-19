import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonNavbarComponent } from './common-navbar/common-navbar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CommonNavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [CommonNavbarComponent],
})
export class AppCommonComponentsModule { }
