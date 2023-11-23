import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
  ],
  exports: [
    MatButtonModule, MatDialogModule
  ]
})
export class CustomMaterialModule { }
