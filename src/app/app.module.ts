import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ShopComponent } from './shop/shop.component';
import { LoginComponent } from './login/login.component';
import { UserService } from './user.service';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ElectronicsDevicesComponent } from './electronics-devices/electronics-devices.component';
import { HomeAppliancesComponent } from './home-appliances/home-appliances.component';
import { FurnituresComponent } from './furnitures/furnitures.component';
import { ClothesComponent } from './clothes/clothes.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductComponent } from './product/product.component'
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientModule } from '@angular/common/http';
import { AlertDialogComponentComponent } from './alert-dialog-component/alert-dialog-component.component';
import { MatIconModule } from '@angular/material/icon';
import { ProfilePopupComponent } from './profile-popup/profile-popup.component'

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    LoginComponent,
    ConfirmDialogComponent,
    ElectronicsDevicesComponent,
    HomeAppliancesComponent,
    FurnituresComponent,
    ClothesComponent,
    ProductComponent,
    AlertDialogComponentComponent,
    ProfilePopupComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    NgbModule,
    MatButtonModule,
    MatMenuModule,
    HttpClientModule,
    MatIconModule,
  ],
  entryComponents: [ConfirmDialogComponent],
  providers: [UserService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
