import { Component, OnInit, HostListener } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers: [NgbCarouselConfig]
})
export class ProductComponent implements OnInit {
  selectedProduct: any;
  loggedInUsername: string | null = null;
  constructor(private userService: UserService, private router: Router, private cookieService:CookieService) { }

  ngOnInit(): void {
    this.selectedProduct = this.userService.getSelectedProduct();
    this.loggedInUsername = this.userService.getUsername();
    if(this.userService.isLoggedIn()){
      if(this.loggedInUsername){
        const expirationDate = new Date();
        expirationDate.setFullYear(expirationDate.getFullYear() + 1);
        this.cookieService.set('username', this.loggedInUsername, expirationDate);
      }
    }
    console.log(this.cookieService.get('username'));
    if(!this.cookieService.check('username')){
      this.loginnav();
    }
  }
  isloginav = true;
  isHelloVisible = false;

  toggleHello() {
    this.isHelloVisible = !this.isHelloVisible;
  }

  loginnav(){
    this.isloginav = !this.isloginav;
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
  
  isImageZoomActive = false;
  openImageZoom() {
    this.isImageZoomActive = true;
  }

  closeImageZoom() {
    this.isImageZoomActive = false;
  }

  handleImageClick() {
    this.openImageZoom();
  }
  
  isImage2ZoomActive = false;
  openImage2Zoom() {
    this.isImage2ZoomActive = true;
  }

  closeImage2Zoom() {
    this.isImage2ZoomActive = false;
  }

  handleImage2Click() {
    this.openImage2Zoom();
  }

  isImage3ZoomActive = false;
  openImage3Zoom() {
    this.isImage3ZoomActive = true;
  }

  closeImage3Zoom() {
    this.isImage3ZoomActive = false;
  }

  handleImage3Click() {
    this.openImage3Zoom();
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'Escape' && this.isImageZoomActive) {
      this.closeImageZoom();
    }
    else if(event.key === 'Escape' && this.isImage2ZoomActive) {
      this.closeImage2Zoom();
    }
    else if(event.key === 'Escape' && this.isImage3ZoomActive) {
      this.closeImage3Zoom();
    }
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

}
