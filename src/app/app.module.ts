import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbDatepickerModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtTokenInterceptor } from './interceptor/jwt-token.interceptor';
import { HomeOffersComponent } from './home/SubType/home-offers/home-offers.component';
import { HomeFashionComponent } from './home/SubType/home-fashion/home-fashion.component';
import { HomeElectronicsComponent } from './home/SubType/home-electronics/home-electronics.component';
import { HomeFoodsComponent } from './home/SubType/home-foods/home-foods.component';
import { HomeEntertainmentComponent } from './home/SubType/home-entertainment/home-entertainment.component';
import { AppCustomLibraryModule } from 'src/app-custom-library/app-custom-library.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeOffersComponent,
    HomeFashionComponent,
    HomeElectronicsComponent,
    HomeFoodsComponent,
    HomeEntertainmentComponent,
    

  ],
  imports: [
    AppCustomLibraryModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbDatepickerModule,
    RouterModule,
    HttpClientModule,

  ],
  providers: [ 
    {provide: HTTP_INTERCEPTORS, useClass: JwtTokenInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

