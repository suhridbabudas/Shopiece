import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { UserDashboardComponent } from './users/Admin/user-dashboard/user-dashboard.component';
import { UserAccountSettingsComponent } from './users/Admin/user-account-settings/user-account-settings.component';
import { UserAddressComponent } from './users/Admin/user-address/user-address.component';
import { UserDeliveryAddressComponent } from './users/Admin/user-delivery-address/user-delivery-address.component';
import { UserMenuComponent } from './users/Admin/user-menu/user-menu.component';
import { UserOrderManagementComponent } from './users/Admin/user-order-management/user-order-management.component';
import { UserProductSubTypeComponent } from './users/Admin/user-product-sub-type/user-product-sub-type.component';
import { UserProductTypeComponent } from './users/Admin/user-product-type/user-product-type.component';
import { UserProductsComponent } from './users/Admin/user-products/user-products.component';
import { UserStocksComponent } from './users/Admin/user-stocks/user-stocks.component';
import { UserUsersComponent } from './users/Admin/user-users/user-users.component';
import { AdminGuard } from './Authentication/admin.guard';
import { HomeElectronicsComponent } from './home/SubType/home-electronics/home-electronics.component';
import { HomeEntertainmentComponent } from './home/SubType/home-entertainment/home-entertainment.component';
import { HomeFashionComponent } from './home/SubType/home-fashion/home-fashion.component';
import { HomeFoodsComponent } from './home/SubType/home-foods/home-foods.component';
import { HomeOffersComponent } from './home/SubType/home-offers/home-offers.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'product/product-details/:id',
    component: ProductDetailsComponent,
    canActivate:[AdminGuard]
  },
  {
    path: 'products',
    loadChildren: () => import('./products/products.module')
      .then(m => m.ProductsModule),
      canActivate:[AdminGuard]
  },
  { path: 'user-Auth', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
  {
    path: 'dashboard',
    component: UserDashboardComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'account-settings',
    component: UserAccountSettingsComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'address',
    component: UserAddressComponent
  },
  {
    path: 'delivery-address',
    component: UserDeliveryAddressComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'account-menu',
    component: UserMenuComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'order-management',
    component: UserOrderManagementComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'product-sub-type',
    component: UserProductSubTypeComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'product-type',
    component: UserProductTypeComponent,
    canActivate: [AdminGuard]
  },
  // {
  //   path: 'products',
  //   component: UserProductsComponent,
  //   canActivate: [AdminGuard]
  // },
  {
    path: 'stocks',
    component: UserStocksComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'users',
    component: UserUsersComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'electronics',
    component: HomeElectronicsComponent,
  },
  {
    path: 'entertainment',
    component: HomeEntertainmentComponent,
  },
  {
    path: 'fashion',
    component: HomeFashionComponent,
  },
  {
    path: 'foods',
    component: HomeFoodsComponent,
  },
  {
    path: 'offers',
    component: HomeOffersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
