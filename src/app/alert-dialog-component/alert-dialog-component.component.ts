import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-alert-dialog-component',
  templateUrl: './alert-dialog-component.component.html',
  styleUrls: ['./alert-dialog-component.component.scss']
})
export class AlertDialogComponentComponent implements OnInit {

  message: string = 'An unspecified error has occurred';
  icon: string = '';
  buttonText = 'Ok';

  constructor(
    @Inject(MAT_DIALOG_DATA)
    private data: {
      message: string;
      icon: string;
      buttonText: string;
    },
    private dialogRef: MatDialogRef<AlertDialogComponentComponent>
  ) {
    if (data?.icon) this.icon = data.icon;
    if (data?.message) this.message = data.message;
    if (data?.buttonText) this.buttonText = data.buttonText;
  }

  closeDialog() {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }
}
