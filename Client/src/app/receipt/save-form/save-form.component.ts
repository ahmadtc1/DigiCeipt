import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {  ReceiptSave } from '../receiptSaveFormat';
@Component({
  selector: 'app-save-form',
  templateUrl: './save-form.component.html',
  styleUrls: ['./save-form.component.css']
})
export class SaveFormComponent implements OnInit{
  name: string;
  content: string;
  isNameEmpty: boolean = true;
  isContentEmpty: boolean = true;
  isVisible: boolean = false;

  getName(): string {
    return this.name;
  }

  setName(value: string): void {
    this.name = value;
  }

  constructor(public dialogRef: MatDialogRef<SaveFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ReceiptSave) { 
    this.name = "";
    this.content = "";
  }

  ngOnInit(): void {

  }
}
