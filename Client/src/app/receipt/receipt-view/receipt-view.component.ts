import { Component, OnInit } from '@angular/core';
import { Receipt } from '../receipt'
import { MatDialog } from '@angular/material';
import { SaveFormComponent } from '../save-form/save-form.component';
import { ReceiptSave } from '../receiptSaveFormat';
import { ReceiptService } from '../receipt.service';
@Component({
  templateUrl: './receipt-view.component.html',
  styleUrls: ['./receipt-view.component.css']
})
export class ReceiptViewComponent implements OnInit {
  receiptName: string;
  receiptContent: any;
  receipts: Receipt[] = [
    {
      "receiptName": "receiptOne",
      "receiptContent": "10.99",
      "dateSaved": new Date()
    },
    {
      "receiptName": "receiptTwo",
      "receiptContent": "10.20",
      "dateSaved": new Date()
    },
    {
      "receiptName": "receiptThree",
      "receiptContent": "12.7",
      "dateSaved": new Date()
    },
    {
      "receiptName": "receiptFour",
      "receiptContent": "10.97",
      "dateSaved": new Date()
    },
    {
      "receiptName": "receiptFive",
      "receiptContent": "5.55",
      "dateSaved": new Date()
    }
  ];
  filteredReceipts: Receipt[] = [];
  _listFilter: string;

  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(SaveFormComponent, {
      data: { name: this.receiptName }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
      this.receiptName = result;
    })
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
