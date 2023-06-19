import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonInterfacesModule } from './app-common-interfaces/app-common-interfaces.module';
import { AppCommonComponentsModule } from './app-common-components/app-common-components.module';
import { AppCommonPipesModule } from './app-common-pipes/app-common-pipes.module';
import { AppCommonServicesModule } from './app-common-services/app-common-services.module';
import { AppCommonValidatorModule } from './app-common-validator/app-common-validator.module';
import { RouterModule, Routes } from '@angular/router';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    AppCommonComponentsModule,
    AppCommonInterfacesModule,
    AppCommonPipesModule,
    AppCommonServicesModule,
    AppCommonValidatorModule,
    RouterModule,
  ],
  exports: [
    AppCommonComponentsModule,
    AppCommonInterfacesModule,
    AppCommonPipesModule,
    AppCommonServicesModule,
    AppCommonValidatorModule
  ]
})
export class AppCustomLibraryModule { }
