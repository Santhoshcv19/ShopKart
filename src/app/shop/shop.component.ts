import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogModel, ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from '../api.service';
import { AlertDialogComponentComponent } from '../alert-dialog-component/alert-dialog-component.component';
import { ProfilePopupComponent } from '../profile-popup/profile-popup.component';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
  providers: [NgbCarouselConfig],
})
export class ShopComponent implements OnInit {
  data: any[] = [];
  result: string = '';
  images = ["../../assets/images/elemainss.avif", "../../assets/images/clothmain.png", "../../assets/images/homeappmain.jpg", "../../assets/images/furmain2.jpg"];
  message: any;

  constructor(private router: Router, private userService: UserService, public dialog: MatDialog, config: NgbCarouselConfig, private renderer: Renderer2, private cookieService:CookieService, private apiService: ApiService) { 
    config.interval = 3000;
    config.keyboard = true;
  
  }

  preloadImages(images: string[]) {
    images.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }
  ngOnInit(): void {
    this.loggedInUsername = this.userService.getUsername();
    this.phone = this.userService.getPhone();
    this.email = this.userService.getEmail();
    console.log(this.phone);
    this.preloadImages(this.images);
    if(this.userService.isLoggedIn()){
      if(this.loggedInUsername && this.phone && this.email){
        const expirationDate = new Date();
        expirationDate.setFullYear(expirationDate.getFullYear() + 1);
        this.cookieService.set('username', this.loggedInUsername, expirationDate);
        this.cookieService.set('phone', this.phone, expirationDate);
        this.cookieService.set('email', this.email, expirationDate);
      }
    }
    console.log(this.cookieService.get('username'));
    if(!this.cookieService.check('username')){
      this.loginnav();
    }
    this.apiService.getMessage().subscribe(data => { 
      this.message = data; 
    });
  }
  @ViewChild('widgetsContent', { static: false }) widgetsContent!: ElementRef;
  isHelloVisible = false;
  ispop = false;
  loggedInUsername: string | null = null;
  phone: string | null = null;
  email: string | null = null;
  isloginav = true;
  toggleHello() {
    this.isHelloVisible = !this.isHelloVisible;
    
  }


  openAlertDialogComponentComponent() {
    this.dialog.open(ProfilePopupComponent, {
      data: {
        icon: 'close',
        message: `${this.cookieService.get('username')}`,
        message2: `${this.cookieService.get('phone')}`,
        icon1: 'contacts',
        icon2: 'mail',
        message3: `${this.cookieService.get('email')}`,
        icon4: 'edit',
      },
      panelClass: 'my-custom-dialog-class',
    });
  }

  onSearchKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      const searchTerm = (event.target as HTMLInputElement).value.toLowerCase();
      if (searchTerm === 'electronics' || searchTerm === 'electronic' || searchTerm === 'elec' || searchTerm === 'ele') {
        this.toggleelecform();
      }
      else if(searchTerm === 'home appliances' || searchTerm === 'home' || searchTerm === 'home appliance' || searchTerm === 'home app'){
        this.togglehomeform();
      }
      else if(searchTerm === 'furnitures' || searchTerm === 'furniture' || searchTerm === 'fur'){
        this.togglefurform();
      }
      else if(searchTerm === 'clothes' || searchTerm === 'clothe' || searchTerm === 'cloth'){
        this.toggledecform();
      }
      else{
        this.togglenoneform();
      }
    }
  }

  loginnav(){
    this.isloginav = !this.isloginav;
  }
  

  ismain1 = true;
  iselec1 = false;
  ishome1 = false;
  isDec1 = false;
  isFur1 = false;
  isnone1 = false;
  toggleelecform(){
    this.router.navigate(['/shop/electronics-devices']);
  }
  togglehomeform(){
    this.router.navigate(['/shop/home-appliances']);
  }
  togglefurform(){
    this.router.navigate(['/shop/furnitures']);
  }
  toggledecform(){
    this.router.navigate(['/shop/clothes']);
  }
  togglenoneform(){
    const hm = document.getElementById("sidebar") as HTMLElement | null;
    if(hm){
      hm.style.marginTop = "-222px";
    }
    this.ismain1 = false;
    this.iselec1 = false;
    this.ishome1 = false;
    this.isFur1 = false;
    this.isDec1 = false;
    this.isnone1 = true;
  }
  toggleloginform(){
    this.cookieService.deleteAll();
    this.router.navigate(['/login'])
  }
  confirmDialog(): void {
    const message = `Are you sure you want Logout?`;

    const dialogData = new ConfirmDialogModel("Confirm Action", message);

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      this.result = dialogResult;
      if(dialogResult == true){
        this.router.navigate(['/login']);
      }
    });
  }

}
