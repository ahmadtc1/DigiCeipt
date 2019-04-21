import { Component, OnInit } from '@angular/core';
import { Receipt } from '../receipt'
import { MatDialog } from '@angular/material';
import { SaveFormComponent } from '../save-form/save-form.component';
import { ReceiptSave } from '../receiptSaveFormat';
@Component({
  templateUrl: './receipt-view.component.html',
  styleUrls: ['./receipt-view.component.css']
})
export class ReceiptViewComponent implements OnInit {
  receiptName: string;
  receiptContent: any;
  receipts: Receipt[];
  filteredReceipts: Receipt[] = [];
  _listFilter: string;

  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(SaveFormComponent);
  }

  ngOnInit() {
  }

  /*
  get listFilter(): string {
    return this._listFilter;
  }


  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredReceipts = this.listFilter ? this.performFilter(this.listFilter): this.receipts;
  }

  
  performFilter(filter: string): Receipt[] {    
  }
  */
}
