import { NgModule } from '@angular/core';
import { RouterModule, Routes, Scroll } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { LoginComponent } from './login/login.component';
import { ElectronicsDevicesComponent } from './electronics-devices/electronics-devices.component';
import { HomeAppliancesComponent } from './home-appliances/home-appliances.component';
import { FurnituresComponent } from './furnitures/furnitures.component';
import { ClothesComponent } from './clothes/clothes.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
    path:'shop',
    component:ShopComponent
  },
  {
    path:'shop/electronics-devices',
    component:ElectronicsDevicesComponent
  },
  {
    path:'shop/home-appliances',
    component:HomeAppliancesComponent
  },
  {
    path:'shop/furnitures',
    component:FurnituresComponent
  },
  {
    path:'shop/clothes',
    component:ClothesComponent
  },
  {
    path:'shop/product',
    component:ProductComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: '/shop',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 64], 
    onSameUrlNavigation: 'reload',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
