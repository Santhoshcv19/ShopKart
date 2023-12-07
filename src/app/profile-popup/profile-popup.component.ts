import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../api.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-profile-popup',
  templateUrl: './profile-popup.component.html',
  styleUrls: ['./profile-popup.component.scss']
})
export class ProfilePopupComponent implements OnInit {
  message: string = 'An unspecified error has occurred';
  message2: string = '';
  message3: string = '';
  message2e: string = '';
  message3e: string = '';
  icon: string = '';
  icon1: string = '';
  icon2: string = '';
  icon4: string = '';
  buttonText = 'Ok';
  constructor(
    @Inject(MAT_DIALOG_DATA)
    private data: {
      message: string;
      message2: string;
      message3: string;
      icon: string;
      icon1: string;
      icon2: string;
      icon4: string;
      buttonText: string;
    },
    private dialogRef: MatDialogRef<ProfilePopupComponent>,
    private apiservice: ApiService,
    private cookieservice: CookieService
  ) {
    if (data?.icon) this.icon = data.icon;
    if (data?.icon1) this.icon1 = data.icon1;
    if (data?.icon2) this.icon2 = data.icon2;
    if (data?.icon4) this.icon4 = data.icon4;
    if (data?.message) this.message = data.message;
    if (data?.message2) this.message2 = data.message2;
    if (data?.message3) this.message3 = data.message3;
    if (data?.buttonText) this.buttonText = data.buttonText;
    dialogRef.disableClose = true;
  }

  closeDialog() {
    if (this.buttonText === 'Close') {
      this.dialogRef.close();
    }
  }

  ngOnInit(): void {
  }

  isEditing = false;

  startEditing(){
    this.isEditing = true;
  }

  saveChanges(){
    const userid = 30
    const newnumber = {
      message2e: this.message2e
    };
    const newmail = {
      message3e: this.message3e
    };
    console.log("the email is:", this.message3e);
    this.apiservice.changeuserdetails(userid, newmail, newnumber).subscribe(
      response=>{
        console.log("The email given to server is:", newmail);
        console.log('PUT request successful',response);
        const expirationDate = new Date();
        expirationDate.setFullYear(expirationDate.getFullYear() + 1);
        this.cookieservice.set('email', this.message3e, expirationDate);
        this.cookieservice.set('phone', this.message2e, expirationDate);
        this.isEditing = false;
      }, error =>{
        console.error('Error in put request',error);
      }
    );
  }

  cancelEditing(){
    this.isEditing = false;
  }
}
