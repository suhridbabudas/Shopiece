import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonNavbarComponent } from './common-navbar/common-navbar.component';
import { RouterModule } from '@angular/router';
import { AppCommonButtonComponent } from './app-common-button/app-common-button.component';
import { AppCommonFooterComponent } from './app-common-footer/app-common-footer.component';



@NgModule({
  declarations: [
    CommonNavbarComponent,
    AppCommonButtonComponent,
    AppCommonFooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CommonNavbarComponent,
    AppCommonFooterComponent
  ],
})
export class AppCommonComponentsModule { }
