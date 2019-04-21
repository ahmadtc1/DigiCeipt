import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {  ReceiptSave } from '../receiptSaveFormat';
@Component({
  selector: 'app-save-form',
  templateUrl: './save-form.component.html',
  styleUrls: ['./save-form.component.css']
})
export class SaveFormComponent implements OnInit{
  content: string;
  isNameEmpty: boolean = true;
  isContentEmpty: boolean = true;
  isVisible: boolean = false;
  isEnabled: boolean = false;

  constructor(public dialogRef: MatDialogRef<SaveFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ReceiptSave) { 
      }

  onClickCancel(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {

  }
}
