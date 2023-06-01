import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UserDashboardComponent } from './Admin/user-dashboard/user-dashboard.component';
import { UserProductsComponent } from './Admin/user-products/user-products.component';
import { UserProductTypeComponent } from './Admin/user-product-type/user-product-type.component';
import { UserProductSubTypeComponent } from './Admin/user-product-sub-type/user-product-sub-type.component';
import { UserUsersComponent } from './Admin/user-users/user-users.component';
import { UserAddressComponent } from './Admin/user-address/user-address.component';
import { UserDeliveryAddressComponent } from './Admin/user-delivery-address/user-delivery-address.component';
import { UserMenuComponent } from './Admin/user-menu/user-menu.component';
import { UserOrderManagementComponent } from './Admin/user-order-management/user-order-management.component';
import { UserStocksComponent } from './Admin/user-stocks/user-stocks.component';
import { UserAccountSettingsComponent } from './Admin/user-account-settings/user-account-settings.component';


@NgModule({
  declarations: [
    UsersComponent,
    UserDashboardComponent,
    UserProductsComponent,
    UserProductTypeComponent,
    UserProductSubTypeComponent,
    UserUsersComponent,
    UserAddressComponent,
    UserDeliveryAddressComponent,
    UserMenuComponent,
    UserOrderManagementComponent,
    UserStocksComponent,
    UserAccountSettingsComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UsersModule { }
