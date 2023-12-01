import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-profile-popup',
  templateUrl: './profile-popup.component.html',
  styleUrls: ['./profile-popup.component.scss']
})
export class ProfilePopupComponent implements OnInit {
  message: string = 'An unspecified error has occurred';
  message2: string = '';
  message3: string = '';
  icon: string = '';
  icon1: string = '';
  icon2: string = '';
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
      buttonText: string;
    },
    private dialogRef: MatDialogRef<ProfilePopupComponent>
  ) {
    if (data?.icon) this.icon = data.icon;
    if (data?.icon1) this.icon1 = data.icon1;
    if (data?.icon2) this.icon2 = data.icon2;
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

}
